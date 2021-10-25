import {ChangeEvent, useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComments, faPlus, faPoll} from "@fortawesome/free-solid-svg-icons";
import {Link, useHistory} from "react-router-dom";
import {validateRoomExist} from "../../core/actions/room_actions";
import {Button} from "react-bootstrap";
import {SEARCH_VALIDATION_TIMEOUT} from "../../share";


export function HomePage() {
    const history = useHistory();

    const [targetRoomId, setTargetRoomId]: [string | null, any] = useState(null)
    const [validationTimeoutId, setValidationTimeoutId]: [number | null, any] = useState(null)
    const [isTargetRoomValid, setIsTargetRoomValid]: [boolean, any] = useState(false)

    const getAdminRoomURL = () => '/admin/' + targetRoomId
    const getPublicRoomURL = () => '/public/' + targetRoomId

    // Validate target room ID on user input
    useEffect(() => {
        if (validationTimeoutId === null) {
            setValidationTimeoutId(setTimeout(async () => {
                if (targetRoomId) {
                    setIsTargetRoomValid(await validateRoomExist(targetRoomId))
                }
                setValidationTimeoutId(null)
            }, SEARCH_VALIDATION_TIMEOUT))
        }
    }, [targetRoomId])

    const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTargetRoomId(e.target.value)
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
            <div className="font-middle d-flex form-group">
                <input className="form-control mr-1" placeholder="Zadejte ID přednášky..."
                       onChange={handleSearchInput}/>
                <Button disabled={!isTargetRoomValid} variant="success" className="mr-1" title="Otevřit hlasování"
                        onClick={handleOpenPublicPage}>
                    <FontAwesomeIcon icon={faComments}/>
                </Button>
                <Button disabled={!isTargetRoomValid} className="mr-1" variant="success" title="Otevřit výsledky"
                        onClick={handleOpenAdminPage}>
                    <FontAwesomeIcon icon={faPoll}/>
                </Button>
                <Button disabled={isTargetRoomValid} variant="success" title="Vytvořit novou přednášku"
                        onClick={handleOpenCreatePollPage}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
            {
                targetRoomId ?
                    <div className="d-flex flex-column font-small text-secondary position-absolute">
                        {
                            isTargetRoomValid ?
                                <div>
                                    <span className="mr-3">Něco se našlo...</span>
                                    <Link className="mr-3" to={getPublicRoomURL()}>Hlasování</Link>
                                    <Link to={getAdminRoomURL()}>Výsledky</Link>
                                </div> :
                                <span>Přednáška neexistuje... <Link to='/admin'>Vytvořit novou přednášku</Link></span>
                        }
                    </div> : null
            }
        </div>
    )
}