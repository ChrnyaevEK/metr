import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faUserFriends, faUserShield} from "@fortawesome/free-solid-svg-icons";
import {
    Link,
    useHistory
} from "react-router-dom";
import {validateRoomExist} from "../../../core/actions/room_actions";
import {exec} from "child_process";

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
                {
                    isValid ?
                        <button className="btn btn-success mr-1" title="Administrace" disabled={!roomId.length}
                                onClick={() => {
                                    history.push(getAdminRoomURL())
                                }}>
                            <FontAwesomeIcon icon={faUserShield}/>
                        </button> : null
                }
                {
                    isValid ?
                        <button className="btn btn-success mr-1" title="Stránka pro veřejnost" disabled={!roomId.length}
                                onClick={() => {
                                    window.location.href = getPublicRoomURL()
                                }}>
                            <FontAwesomeIcon icon={faUserFriends}/>
                        </button> : null
                }
                <button className="btn btn-success" title="Vytvořit novou přednášku" onClick={() => {
                    history.push('/admin/')
                }}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            {
                roomId.length ?
                    <div className="d-flex flex-column font-small text-secondary position-absolute">
                        {
                            (isValid) ?
                                <div>
                                    <span className="mr-2"><Link to={getAdminRoomURL()}>Admin</Link></span>
                                    <a className="mr-2" href={getPublicRoomURL()}>Public</a>
                                    <Link to='/admin/'>Vytvořit novou přednášku</Link>
                                </div> :
                                <span>Přednáška neexistuje... <Link to='/admin/'>Vytvořit novou přenášku</Link></span>
                        }
                    </div> : null
            }
        </div>
    )
}