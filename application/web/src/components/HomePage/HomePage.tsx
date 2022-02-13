import React, {ChangeEvent, useRef, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComments, faPlus, faPoll} from "@fortawesome/free-solid-svg-icons";
import {Link, useHistory} from "react-router-dom";
import {validateRoomExist} from "../../core/actions/room_actions";
import {Button} from "react-bootstrap";
import {SEARCH_VALIDATION_TIMEOUT} from "../../share";


export function HomePage() {
    const history = useHistory();

    const [validationTimeoutId, setValidationTimeoutId]: [number | null, any] = useState(null)
    const [isTargetRoomValid, setIsTargetRoomValid]: [boolean | null, any] = useState(null)

    const targetRoomId: React.MutableRefObject<string | null> = useRef(null)

    const getAdminRoomURL = () => '/admin/' + targetRoomId.current
    const getPublicRoomURL = () => '/public/' + targetRoomId.current

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        targetRoomId .current = e.target.value
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
            <div>
                <p className="text-secondary font-middle">
                    <span className="font-weight-bold">Metrbot</span> je nástroj, který přináší okamžitou zpětnou vazbu
                    a pomáhá
                    zlepšit kvalitu a účinnost výkladu.
                </p>
            </div>
            <div className="font-middle d-flex form-group">
                <input className="form-control mr-1" placeholder="Zadejte ID hlasování..." maxLength={20}
                       onInput={handleSearchInput}/>
                <Button disabled={!Boolean(isTargetRoomValid)} variant="success" className="mr-1"
                        title="Otevřit hlasování"
                        onClick={handleOpenPublicPage}>
                    <FontAwesomeIcon icon={faComments}/>
                </Button>
                <Button disabled={!Boolean(isTargetRoomValid)} className="mr-1" variant="success"
                        title="Otevřit výsledky"
                        onClick={handleOpenAdminPage}>
                    <FontAwesomeIcon icon={faPoll}/>
                </Button>
                <Button disabled={Boolean(isTargetRoomValid)} variant="success" title="Vytvořit nové hlasování"
                        onClick={handleOpenCreatePollPage}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
            <div style={{visibility: targetRoomId.current && isTargetRoomValid !== null ? "visible" : "hidden"}}
                 className="d-flex flex-column font-small">
                {
                    isTargetRoomValid ?
                        <p>
                            <span className="mr-3">Něco se našlo...</span>
                            <Link className="mr-3" to={getPublicRoomURL()}>Hlasování</Link>
                            <Link to={getAdminRoomURL()}>Výsledky</Link>
                        </p> :
                        <p>Hlasování neexistuje... <Link to='/admin'>Vytvořit nové hlasování</Link></p>
                }
            </div>
            <div>
                <p className="text-secondary font-middle">
                    Začněte vytvořením nového hlasování nebo otevřete existující. Hlasování může být
                    otevřeno pro náhled výsledků a pro samotné hlasování.
                </p>
            </div>
        </div>
    )
}

export default HomePage