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
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {createClient} from "../../../core/actions/client_actions";
import QRCode from "react-qr-code";
import WS from "../../../core/ws";
import {useHistory} from "react-router-dom";

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

    const history = useHistory()

    const [savedMarker, setSavedMarker]: [boolean, any] = useState(false)
    const [showShareModal, setShowShareModal]: [boolean, any] = useState(false);
    const [answersBuffer, setAnswersBuffer]: [NumericAnswerPrototype[], any] = useState([])
    const [saveTimeoutId, setSaveTimeoutId]: [number | null, any] = useState(null)

    const room: RoomType = useSelector((state: RootState) => state.roomManager.room)
    const client: ClientType = useSelector((state: RootState) => state.clientsManager.client)
    const questions: QuestionType[] = useSelector((state: RootState) => state.questionManager.questions)

    const answersBufferRef = useRef(answersBuffer)
    const clientRef = useRef(client)

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
            case 'public_conflict':
                history.push({
                    pathname: '/conflict',
                    state: e
                })
        }
    }
    const triggerUpdate = async () => {
        try {
            await dispatch(retrieveRoom(match.params.roomId))
            await dispatch(listQuestions(match.params.roomId))
        } catch {
        }
    }

    useLayoutEffect(() => {
        answersBufferRef.current = answersBuffer
        clientRef.current = client
    }, [answersBuffer, client]);

    useEffect(() => {
        // Set timeout to send answers to server and clean buffer
        if (saveTimeoutId === null && answersBuffer.length) {
            setSaveTimeoutId(setTimeout(async () => {
                let createdAnswers: PromiseLike<any> [] = [];
                for (let answer of answersBufferRef.current) {
                    createdAnswers.push(createAnswer(answer, 'numeric_answers'))
                }
                setAnswersBuffer([])
                setSaveTimeoutId(null)
                try {
                    await Promise.all(createdAnswers)
                } catch {
                    return
                }
                setSavedMarker(true)
            }, ANSWER_SAVE_TIMEOUT))
        }
    }, [answersBuffer])

    useEffect(() => {
        // Retrieve data for the first time, create and propagate client
        ws.open('public_poll', match.params.roomId, handleMessage, async () => {
            try {
                ws.send({
                    type: 'bind_client',
                    detail: clientRef.current || await dispatch(createClient({room: match.params.roomId}))
                })
            } catch {
                return
            }
            triggerUpdate()
        })
    }, [])

    return (
        <div>
            <div className="font-big d-flex justify-content-between mb-2">
                <div className="font-weight-bold">
                    <span className="mr-2">Hlasování @ {room?.id}</span>
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
                clientRef.current ? Object.keys(displayOptions).map((d_o: string) => {
                    let questionGroup = []
                    for (let q of questions.filter((q) => q.display_option === d_o)) {
                        questionGroup.push(<Slider key={q.id} question={q} onChangeHandler={handleAddAnswer}/>)
                    }
                    return questionGroup.length ?
                        <QuestionGroup key={d_o} questionGroup={questionGroup}/> : null
                }) : <div className="alert alert-info" role="alert">Zatím zde nic není</div>
            }
            <div className="text-secondary font-tiny mt-3">
                Nesdílejte hlasování tlačítkem "Sdílet" v pravém vrchním rohu.
            </div>
            <div className="font-small text-success position-absolute font-weight-bold">
                {savedMarker ? 'Uloženo!' : null}
            </div>
        </div>
    )
}

export default AnswerPage