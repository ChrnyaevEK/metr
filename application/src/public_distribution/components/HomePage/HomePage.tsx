import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {
    Link,
    useHistory
} from "react-router-dom";

export function HomePage() {
    const [roomId, setRoomId]: [string, any] = useState('')
    const getRoomURL = () => '/public/' + roomId
    let history = useHistory();

    return (
        <div>
            <div className="font-big"><strong>Vítejte v aplikaci Metr!</strong></div>
            <div className="font-middle text-secondary mb-5">Pro pokračování zadejte ID přednášky</div>
            <div className="font-middle d-flex form-group">
                <input type="text" className="form-control mr-1" placeholder="Zadejte ID přednášky" onChange={(e) => {
                    setRoomId(e.target.value)
                }}/>
                <button className="btn btn-success" disabled={!roomId.length} onClick={() => {
                    history.push(getRoomURL())
                }}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
            <div className="font-small text-secondary">
                {
                    roomId.length ?
                        <Link to={getRoomURL()}>{window.location.host}{getRoomURL()}</Link> :
                        <i>The best is yet to come...</i>
                }
            </div>
        </div>
    )
}