import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps} from "react-router";
import {Modal, Button, InputGroup} from "react-bootstrap";
import QRCode from "react-qr-code";
import Slider from "../Widgets/Slider/Slider";
import {BASE_URL, displayOptions} from "../../../share";
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

    const [rateOption, setRateOption]: ['mean_rate' | 'mode_rate' | 'median_rate', any] = useState('mean_rate');
    const [showShareModal, setShowShareModal] = useState(false);
    const handleCloseShareModal = () => setShowShareModal(false);
    const handleShowShareModal = () => setShowShareModal(true);
    const [shareAdmin, setShareAdmin] = useState(false)
    const [lastUpdate, setLastUpdate] = useState(new Date())

    const getShareURL = () => `${window.location.origin}${shareAdmin ? '/admin/' : '/public/'}${room?.id}/`
    const handleShareAdmin = () => setShareAdmin(true)
    const handleSharePublic = () => setShareAdmin(false)

    const rateOptions = [
        {name: 'Průměr', value: 'mean_rate'},
        {name: 'Medián', value: 'median_rate'},
        {name: 'Modus', value: 'mode_rate'},
    ];

    const triggerUpdate = async () => {
        try {
            await dispatch(retrieveRoom(match.params.roomId))
            await dispatch(listQuestions(match.params.roomId))
            setLastUpdate(new Date())
        } catch {
            return
        }
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
        ws.open('admin_poll', match.params.roomId, handleMessage, triggerUpdate)
    }, [])

    return (
        <div>
            <div className="font-big d-flex justify-content-between align-items-baseline mb-3">
                <div>
                    <strong className="mr-2">Výsledky @ {room?.id}</strong>
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
                        <Button variant="light" onClick={handleSharePublic} className="mr-2">Hlasování</Button>
                        <Button variant="light" onClick={handleShareAdmin}>Výsledky</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {
                Object.keys(displayOptions).map((d_o: string) => {
                    let questionGroup = []
                    for (let q of questions.filter((q: QuestionType) => q.display_option === d_o)) {
                        questionGroup.push(<Slider question={q} rateOption={rateOption} key={q.id}/>)
                    }
                    return questionGroup.length ? <QuestionGroup key={d_o} questionGroups={questionGroup}/> : null
                })
            }
            <div className="row text-secondary font-small mt-3">
                <div className="col-3 d-flex justify-content-start">
                    <InputGroup className="d-flex flex-column">
                        {rateOptions.map((rate, i) => (
                            <label key={i} title={`Použit ${rate.name} pro hodnocení výsledků`}>
                                <input id={`radio-${i}`} type="radio" value={rate.value}
                                       checked={rateOption === rate.value} className="mr-2"
                                       onChange={(e) => setRateOption(e.currentTarget.value)}
                                />
                                {rate.name}
                            </label>
                        ))}
                    </InputGroup>
                </div>
                <div className="col-6 d-flex justify-content-center text-truncate">
                    Poslední aktualizace {lastUpdate.toLocaleTimeString('cz-CZ')}
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <a href={`${BASE_URL}/csv_export?room=${room?.id}`}>Export</a>
                </div>
            </div>
        </div>
    )
}

export default ReviewPage