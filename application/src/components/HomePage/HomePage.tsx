import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faComments, faPlus, faPoll, faUserFriends, faUserShield} from "@fortawesome/free-solid-svg-icons";
import {
    Link,
    useHistory
} from "react-router-dom";
import {validateRoomExist} from "../../core/actions/room_actions";
import {exec} from "child_process";
import {Button} from "react-bootstrap";

export function HomePage() {
    const [roomId, setRoomId]: [string, any] = useState('')
    const [isValid, setIsValid]: [boolean, any] = useState(false)

    const getAdminRoomURL = () => '/admin/' + roomId
    const getPublicRoomURL = () => '/public/' + roomId
    let history = useHistory();

    useEffect(() => {
        (async () => {
            try {
                setIsValid(await validateRoomExist(roomId))
            } catch (e) {
                setIsValid(false)
            }
        })()
    }, [roomId])

    return (
        <div>
            <div className="font-middle d-flex form-group">
                <input type="text" className="form-control mr-1" placeholder="Zadejte ID přednášky..."
                       onChange={(e) => {
                           setRoomId(e.target.value)
                       }}/>
                <Button disabled={!isValid} variant="success" className="mr-1" title="Otevřit hlasování"
                        onClick={() => {
                            history.push(getPublicRoomURL())
                        }}>
                    <FontAwesomeIcon icon={faComments}/>
                </Button>
                <Button disabled={!isValid} className="mr-1" variant="success" title="Otevřit výsledky"
                        onClick={() => {
                            history.push(getAdminRoomURL())
                        }}>
                    <FontAwesomeIcon icon={faPoll}/>
                </Button>
                <Button disabled={isValid} variant="success" title="Vytvořit novou přednášku" onClick={() => {
                    history.push('/admin/')
                }}>
                    <FontAwesomeIcon icon={faPlus}/>
                </Button>
            </div>
            {
                roomId.length ?
                    <div className="d-flex flex-column font-small text-secondary position-absolute">
                        {
                            (isValid) ?
                                <div>
                                    <span className="mr-3">Něco se našlo...</span>
                                    <Link className="mr-3" to={getPublicRoomURL()}>Hlasování</Link>
                                    <Link to={getAdminRoomURL()}>Výsledky</Link>
                                </div> :
                                <span>Přednáška neexistuje... <Link to='/admin'>Vytvořit novou přenášku</Link></span>
                        }
                    </div> : null
            }
        </div>
    )
}