import React, {ChangeEvent, useRef, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComments, faPlus, faPoll} from "@fortawesome/free-solid-svg-icons";
import {Link, useHistory} from "react-router-dom";
import {validateRoomExist} from "../../core/actions/room_actions";
import {Button} from "react-bootstrap";
import {SEARCH_VALIDATION_TIMEOUT} from "../../share";


function FirstStep(props: { i: number, text: string }) {
    return (
        <div className="m-2 d-flex alert alert-light border font-weight-bold">
            <span className="text-secondary mr-2">{props.i}.</span>
            <span className="text-success">{props.text}</span>
        </div>
    )
}

export function HomePage() {
    const history = useHistory();

    const [validationTimeoutId, setValidationTimeoutId]: [number | null, any] = useState(null)
    const [isTargetRoomValid, setIsTargetRoomValid]: [boolean | null, any] = useState(null)

    const targetRoomId: React.MutableRefObject<string | null> = useRef(null)

    const getAdminRoomURL = () => '/admin/' + targetRoomId.current
    const getPublicRoomURL = () => '/public/' + targetRoomId.current

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        targetRoomId.current = e.target.value
        setIsTargetRoomValid(null)
        if (validationTimeoutId === null) {
            setValidationTimeoutId(setTimeout(async () => {
                if (targetRoomId.current) {
                    try {
                        setIsTargetRoomValid(await validateRoomExist(targetRoomId.current))
                    } catch {
                        setIsTargetRoomValid(false);
                    }
                }
                setValidationTimeoutId(null)
            }, SEARCH_VALIDATION_TIMEOUT))
        }
    }
    const handleOpenPublicPage = () => {
        history.push(getPublicRoomURL())
    }
    const handleOpenAdminPage = () => {
        history.push(getAdminRoomURL())
    }
    const handleOpenCreatePollPage = () => {
        history.push('/admin')
    }

    return (
        <div>
            <div className="font-middle d-flex form-group mb-2">
                <input className="form-control mr-1" placeholder="Vyhledat hlasov??n??" maxLength={20}
                       onInput={handleSearchInput}/>
                <Button disabled={!Boolean(isTargetRoomValid)} variant="success" className="mr-1"
                        title="Otev??it hlasov??n??"
                        onClick={handleOpenPublicPage}>
                    <FontAwesomeIcon icon={faComments}/>
                </Button>
                <Button disabled={!Boolean(isTargetRoomValid)} className="mr-1" variant="success"
                        title="Otev??it v??sledky"
                        onClick={handleOpenAdminPage}>
                    <FontAwesomeIcon icon={faPoll}/>
                </Button>
                <Button disabled={Boolean(isTargetRoomValid)} variant="success" title="Vytvo??it nov?? hlasov??n??"
                        onClick={handleOpenCreatePollPage}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
            <div style={{visibility: targetRoomId.current && isTargetRoomValid !== null ? "visible" : "hidden"}}
                 className="d-flex flex-column font-small mb-3 text-secondary">
                {
                    isTargetRoomValid ?
                        <span>
                            <span className="mr-3">N??co se na??lo...</span>
                            <Link className="mr-3" to={getPublicRoomURL()}>Hlasov??n??</Link>
                            <Link to={getAdminRoomURL()}>V??sledky</Link>
                        </span> :
                        <span>Hlasov??n?? neexistuje, <Link to='/admin'>vytvo??it nov?? hlasov??n??</Link></span>
                }
            </div>

            <div className="text-dark font-weight-bold font-big mb-2">Co je metrbot?</div>
            <div className="text-secondary mb-3">
                Metrbot je n??stroj, kter?? p??in?????? okam??itou zp??tnou vazbu
                a pom??h?? zlep??it kvalitu a ????innost v??kladu.
            </div>

            <video width="100%" controls={true} autoPlay={true} muted={true} loop={true} className="shadow mb-3">
                <source src="/static/intro.mp4" type="video/mp4"/>
                Your browser does not support the video element.
            </video>

            <div className="text-dark font-weight-bold font-big mb-2">Prvn?? kroky...</div>
            <FirstStep i={1} text="Vytvo?? nebo otev??i hlasov??n??"/>
            <FirstStep i={2} text="Nasd??lej hlasov??n??"/>
            <FirstStep i={3} text="Sleduj a reaguj"/>
            <div className="text-secondary mt-2">
                ??iv?? zp??tn?? vazba pom????e chytit to spr??vn?? tempo pov??d??ni!
            </div>
        </div>
    )
}

export default HomePage