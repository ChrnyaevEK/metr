import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import {ANSWER_SAVE_TIMEOUT, displayOptions} from "../../../share";
import {Slider} from "../Widgets/Slider/Slider";
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../core/store";
import {createAnswer} from "../../../core/actions/anwers_actions";
import {RouteComponentProps} from "react-router";
import {retrieveRoom} from "../../../core/actions/room_actions";
import {listQuestions} from "../../../core/actions/questions_actions";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {createClient} from "../../../core/actions/client_actions";
import QRCode from "react-qr-code";
import WS from "../../../core/ws";

const ws = new WS()

function QuestionGroup(props: {
    questionGroup: JSX.Element[]
}) {
    return (
        <div className="card mb-2">
            <div className="card-body">
                {props.questionGroup}
            </div>
        </div>
    )
}

export function AnswerPage({match}: RouteComponentProps<{ roomId: string }>) {
    const dispatch = useDispatch()

    const [savedMarker, setSavedMarker]: [boolean, any] = useState(false)
    const [showShareModal, setShowShareModal]: [boolean, any] = useState(false);
    const [answersBuffer, setAnswersBuffer]: [NumericAnswerPrototype[], any] = useState([])
    const [saveTimeoutId, setSaveTimeoutId]: [number | null, any] = useState(null)

    const room: RoomType = useSelector((state: RootState) => state.roomManager.room)
    const client: ClientType = useSelector((state: RootState) => state.clientsManager.client)
    const questions: QuestionType[] = useSelector((state: RootState) => state.questionManager.questions)

    const answersBufferRef = useRef(answersBuffer)

    const getShareURL = () => `${window.location.origin}/public/${room?.id}/`
    const handleCloseShareModal = () => setShowShareModal(false);
    const handleShowShareModal = () => setShowShareModal(true);
    const handleAddAnswer = (questionId: string, value: number) => {
        setSavedMarker(false)
        setAnswersBuffer([
            ...answersBuffer.filter((answer) => answer.question !== questionId),
            {
                value,
                client: client.id,
                question: questionId,
            }])
    }
    const handleMessage = (e: WSEvent) => {
        switch (e.type) {
            case 'admin_connect':
            case 'admin_disconnect':
                triggerUpdate()
                break
        }
    }
    const triggerUpdate = async () => {
        await dispatch(retrieveRoom(match.params.roomId))
        await dispatch(listQuestions(match.params.roomId))
    }

    useLayoutEffect(() => {
        answersBufferRef.current = answersBuffer
    }, [answersBuffer]);

    useEffect(() => {
        // Set timeout to send answers to server and clean buffer
        if (saveTimeoutId === null && answersBuffer.length) {
            setSaveTimeoutId(setTimeout(() => {
                for (let answer of answersBufferRef.current) {
                    createAnswer(answer, 'numeric_answers')
                }
                setAnswersBuffer([])
                setSavedMarker(true)
                setSaveTimeoutId(null)
            }, ANSWER_SAVE_TIMEOUT))
        }
    }, [answersBuffer])

    useEffect(() => {
        // Retrieve data for the first time, create and propagate client
        (async () => {
            ws.open('public_poll', match.params.roomId, handleMessage)
            ws.send({
                type: 'bind_client',
                message: await dispatch(createClient({room: match.params.roomId}))
            })
            triggerUpdate()
        })()
    }, [])

    return (
        <div>
            <div className="font-big d-flex justify-content-between mb-2">
                <div className="font-weight-bold">
                    <span className="mr-2">Přednáška @ {room?.id}</span>
                    <span className="font-small text-secondary"> {room?.is_online ? 'online' : 'offline'}</span>
                </div>
                <Button variant="light" onClick={handleShowShareModal}><FontAwesomeIcon icon={faShareAlt}/></Button>
                <Modal show={showShareModal} onHide={handleCloseShareModal} centered className="d-flex">
                    <Modal.Header className="font-weight-bold text-secondary">Hlasování</Modal.Header>
                    <Modal.Body className="d-flex flex-column align-items-center">
                        <QRCode className="m-2" value={getShareURL()}/>
                        <a href={getShareURL()} target="_blank">{getShareURL()}</a>
                    </Modal.Body>
                </Modal>
            </div>
            {
                Object.keys(displayOptions).map((displayOption: string) => {
                    let questionGroup = []
                    for (let question of questions.filter((q) => q.display_option === displayOption)) {
                        questionGroup.push(<Slider key={question.id} question={question}
                                                   onChangeHandler={handleAddAnswer}/>)
                    }
                    return <QuestionGroup key={displayOption} questionGroup={questionGroup}/>
                })
            }
            <div className="font-small text-success position-absolute font-weight-bold">
                {savedMarker ? 'Uloženo!' : null}
            </div>
        </div>
    )
}

export default AnswerPage