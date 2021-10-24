import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import Slider from "../Widgets/Slider/Slider";
import {useEffect, useState} from "react";
import {displayOptions} from "../../../share";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../core/store";
import {retrieveRoom} from "../../../core/actions/room_actions";
import {listQuestions} from "../../../core/actions/questions_actions";
import {RouteComponentProps} from "react-router";
import {Modal, Button} from "react-bootstrap";
import QRCode from "react-qr-code";
import WS from "../../../core/ws";

interface IQuestionGroup {
    questions: JSX.Element[]
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

type TParams = {
    roomId: string
}

const ws = new WS()

export function ReviewPage({match}: RouteComponentProps<TParams>) {
    const [showShare, setShowShare] = useState(false);
    const handleClose = () => setShowShare(false);
    const handleShow = () => setShowShare(true);

    const [shareAdmin, setShareAdmin] = useState(false)

    const dispatch = useDispatch()

    const room = useSelector((state: RootState) => state.roomManager.room)
    const questions = useSelector((state: RootState) => state.questionManager.questions)

    const triggerUpdate = async () => {
        await dispatch(retrieveRoom(match.params.roomId))
        await dispatch(listQuestions(match.params.roomId))
    }

    const handleMessage = (e: WSEvent) => {
        switch (e.type) {
            case 'public_connect':
            case 'state_change':
            case 'public_disconnect':
                triggerUpdate()
                break
            default:
                throw `Unknown WS event ${e.type}`
        }
    }

    // Retrieve data for the first time, on error - display error
    useEffect(() => {
        (async () => {
            await triggerUpdate()
            ws.open('admin_poll', match.params.roomId, handleMessage)
        })()
    }, [])

    return (
        <div>
            <div className="font-big d-flex justify-content-between mb-2">
                <div>
                    <strong className="mr-2">Přednáška @ {room?.id}</strong>
                    <strong className="font-small text-info mb-3"> {room?.online_counter} online</strong>
                </div>
                <Button onClick={handleShow} variant="light">
                    <FontAwesomeIcon icon={faShareAlt}/>
                </Button>
                <Modal show={showShare} onHide={handleClose} centered className="d-flex">
                    <Modal.Body>
                        <strong className="text-info">{shareAdmin ? "Náhled" : "Hlasování"}</strong>
                        <div className="d-flex justify-content-center m-2">
                            <QRCode
                                value={`${window.location.origin}${shareAdmin ? '/admin/' : '/public/'}${room?.id}/`}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-between">
                        <div>
                            <Button variant="light" onClick={() => setShareAdmin(false)}
                                    className="mr-2">Hlasování</Button>
                            <Button variant="light" onClick={() => setShareAdmin(true)}>Náhled</Button>
                        </div>
                        <Button variant="primary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {
                Object.keys(displayOptions).map((op: string) => {
                    let qs = []
                    for (let q of questions.filter((q: QuestionType) => q.display_option === op)) {
                        qs.push(<Slider question={q} key={q.id}/>)
                    }
                    return qs.length ? <QuestionGroup key={op} questions={qs}/> : null
                })
            }
        </div>
    )
}

export default ReviewPage