import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShare, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps} from "react-router";
import {Modal, Button} from "react-bootstrap";
import QRCode from "react-qr-code";
import Slider from "../Widgets/Slider/Slider";
import {displayOptions} from "../../../share";
import {RootState} from "../../../core/store";
import {retrieveRoom} from "../../../core/actions/room_actions";
import {listQuestions} from "../../../core/actions/questions_actions";
import WS from "../../../core/ws";

const ws = new WS()

function QuestionGroup(props: {
    questionGroups: JSX.Element[]
}) {
    return (
        <div className="card mb-2">
            <div className="card-body">
                {props.questionGroups}
            </div>
        </div>
    )
}

export function ReviewPage({match}: RouteComponentProps<{ roomId: string }>) {
    const dispatch = useDispatch()

    const room = useSelector((state: RootState) => state.roomManager.room)
    const questions = useSelector((state: RootState) => state.questionManager.questions)

    const [showShareModal, setShowShareModal] = useState(false);
    const handleCloseShareModal = () => setShowShareModal(false);
    const handleShowShareModal = () => setShowShareModal(true);
    const [shareAdmin, setShareAdmin] = useState(false)

    const getShareURL = () => `${window.location.origin}${shareAdmin ? '/admin/' : '/public/'}${room?.id}/`
    const handleShareAdmin = () => setShareAdmin(true)
    const handleSharePublic = () => setShareAdmin(false)

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
        }
    }

    // Retrieve data for the first time, on error - display error
    useEffect(() => {
        ws.open('admin_poll', match.params.roomId, handleMessage)
        triggerUpdate()
    }, [])

    return (
        <div>
            <div className="font-big d-flex justify-content-between mb-3">
                <div>
                    <strong className="mr-2">Přednáška @ {room?.id}</strong>
                    <strong className="font-small text-secondary mb-3">{room?.online_counter} online</strong>
                </div>
                <Button onClick={handleShowShareModal} variant="light">
                    <FontAwesomeIcon icon={faShareAlt}/>
                </Button>
                <Modal show={showShareModal} onHide={handleCloseShareModal} centered className="d-flex">
                    <Modal.Header className="font-weight-bold">
                        {shareAdmin ? "Výsledky" : "Hlasování"}
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column align-items-center">
                        <QRCode className="m-2" value={getShareURL()}/>
                        <a href={getShareURL()} target="_blank">{getShareURL()}</a>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-end">
                        <Button variant="primary" onClick={handleSharePublic} className="mr-2">Hlasování</Button>
                        <Button variant="primary" onClick={handleShareAdmin}>Výsledky</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {
                Object.keys(displayOptions).map((op: string) => {
                    let questionGroup = []
                    for (let question of questions.filter((question: QuestionType) => question.display_option === op)) {
                        questionGroup.push(<Slider question={question} key={question.id}/>)
                    }
                    return questionGroup.length ? <QuestionGroup key={op} questionGroups={questionGroup}/> : null
                })
            }
        </div>
    )
}

export default ReviewPage