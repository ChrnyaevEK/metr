import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import {displayOptions} from "../../../share";
import {Slider} from "../Widgets/Slider/Slider";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../core/store";
import {createAnswer} from "../../../core/actions/anwers_actions";
import {RouteComponentProps} from "react-router";
import {retrieveRoom} from "../../../core/actions/room_actions";
import {listQuestions} from "../../../core/actions/questions_actions";
import {useEffect, useRef, useState} from "react";
import {createClient} from "../../../core/actions/client_actions";
import QRCode from "react-qr-code";
import WS from "../../../core/ws";

interface IQuestionGroup {
    questions: JSX.Element[]
}

type TParams = {
    roomId: string
}

function QuestionGroup(props: IQuestionGroup) {
    return (
        <div className="card mb-2">
            <div className="card-body">
                {props.questions}
            </div>
        </div>
    )
}

const ws = new WS()

export function AnswerPage({match}: RouteComponentProps<TParams>) {
    const timeout = 2000 // Save timeout [s]

    const dispatch = useDispatch()

    const [showShare, setShowShare] = useState(false);
    const handleClose = () => setShowShare(false);
    const handleShow = () => setShowShare(true);

    const room: RoomType = useSelector((state: RootState) => state.roomManager.room)
    const questions: QuestionType[] = useSelector((state: RootState) => state.questionManager.questions)
    const client: ClientType = useSelector((state: RootState) => state.clientsManager.client)

    const [saveTimeoutId, setSaveTimeoutId]: [number | null, any] = useState(null)
    const [saved, setSaved] = useState(false)

    const [tempAnswers, setTempAnswers]: [NumericAnswerPrototype[], any] = useState([])
    const tempAnswersRef = useRef(tempAnswers)

    const handleAddAnswer = (question: QuestionType, value: number) => {
        setSaved(false)
        let ans = tempAnswers.filter((a) => a.question !== question.id)
        setTempAnswers([...ans, {
            value,
            client: client.id,
            question: question.id,
        }])
    }

    const handleMessage = (e: WSEvent) => {
        switch (e.type) {
            case 'admin_connect':
            case 'admin_disconnect':
                triggerUpdate()
                break
            default:
                throw `Unknown WS event ${e.type}`
        }
    }

    useEffect(() => {
        tempAnswersRef.current = tempAnswers
        if (saveTimeoutId === null && tempAnswers.length) {
            setSaveTimeoutId(setTimeout(() => {
                let ans = [...tempAnswersRef.current]
                setTempAnswers([])
                for (let a of ans) {
                    createAnswer(a, 'numeric_answers')
                }
                setSaved(true)
                setSaveTimeoutId(null)
            }, timeout))
        }
    }, [tempAnswers])

    const triggerUpdate = async () => {
        ws.send({
            type: 'bind_client',
            message: await dispatch(createClient({room: match.params.roomId}))
        })
        await dispatch(retrieveRoom(match.params.roomId))
        await dispatch(listQuestions(match.params.roomId))
    }

    // Retrieve data for the first time, on error - display error
    useEffect(() => {
        (async () => {
            ws.open('public_poll', match.params.roomId, handleMessage)
            triggerUpdate()
        })()
    }, [])

    return (
        <div>
            <div className="font-big d-flex justify-content-between mb-2">
                <div>
                    <strong className="mr-2">Přednáška @ {room?.id}</strong>
                    <strong className="font-small mb-3 text-info"> {room?.is_online ? 'online' : 'offline'}</strong>
                </div>
                <Button variant="light" onClick={handleShow}><FontAwesomeIcon icon={faShareAlt}/></Button>
                <Modal show={showShare} onHide={handleClose} centered className="d-flex">
                    <Modal.Body>
                        <strong className="text-info">Hlasování</strong>
                        <div className="d-flex justify-content-center m-2">
                            <QRCode
                                value={`${window.location.origin}/public/${room?.id}/`}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-end">
                        <Button variant="primary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {
                Object.keys(displayOptions).map((op: string) => {
                    let qs = []
                    for (let q of questions.filter((q) => q.display_option === op)) {
                        qs.push(<Slider key={q.id} question={q} onChangeHandler={(value: string) => {
                            handleAddAnswer(q, parseInt(value))
                        }}/>)
                    }
                    return qs.length ? <QuestionGroup key={op} questions={qs}/> : null
                })
            }
            <div className="font-small text-success position-absolute">
                {saved ? <strong>Uloženo!</strong> : null}
            </div>
        </div>
    )
}

export default AnswerPage