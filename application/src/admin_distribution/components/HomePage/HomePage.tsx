import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faUserFriends, faUserShield} from "@fortawesome/free-solid-svg-icons";
import {
    Link,
    useHistory
} from "react-router-dom";
import {useDispatch} from "react-redux";

export function HomePage() {
    const dispatch = useDispatch()
    const [roomId, setRoomId]: [string, any] = useState('')
    const getAdminRoomURL = () => '/admin/' + roomId
    const getPublicRoomURL = () => '/public/' + roomId
    let history = useHistory();

    return (
        <div>
            <div className="font-big"><strong>Vítejte v aplikaci Metr!</strong></div>
            <div className="font-middle text-secondary mb-5">Pro pokračování zadejte ID dotazníku</div>
            <div className="font-middle d-flex form-group">
                <input type="text" className="form-control mr-1" placeholder="Zadejte ID dotazníku" onChange={(e) => {
                    setRoomId(e.target.value)
                }}/>
                <button className="btn btn-success mr-1" title="Administrace" disabled={!roomId.length} onClick={() => {
                    history.push(getAdminRoomURL())
                }}>
                    <FontAwesomeIcon icon={faUserShield}/>
                </button>
                <button className="btn btn-success mr-1" title="Stránka pro veřejnost" disabled={!roomId.length}
                        onClick={() => {
                            window.location.href = getPublicRoomURL()
                        }}>
                    <FontAwesomeIcon icon={faUserFriends}/>
                </button>
                <button className="btn btn-success" title="Vutvořit nový dotazník" onClick={() => {
                    history.push('/admin/')
                }}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <div className="d-flex flex-column font-small text-secondary">
                {
                    roomId.length ?
                        <div>
                            <span className="mr-2"><Link to={getAdminRoomURL()}>Admin</Link></span>
                            <a href={getPublicRoomURL()}>Public</a>
                        </div> :
                        <i>The best is yet to come...</i>
                }
            </div>
        </div>
    )
}