import {useEffect, useState, KeyboardEvent} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {
    Link,
    useHistory
} from "react-router-dom";
import {validateRoomExist} from "../../../core/actions/room_actions";

export function HomePage() {
    const [roomId, setRoomId]: [string, any] = useState('')
    const getRoomURL = () => '/public/' + roomId

    const [isValid, setIsValid]: [boolean, any] = useState(false)

    const history = useHistory();

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
                       }}
                       onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                           if (e.key === 'Enter' && isValid) {
                               history.push(getRoomURL())
                           }
                       }}
                />
                <button className="btn btn-success" disabled={!isValid} onClick={() => {
                    history.push(getRoomURL())
                }}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>
            {
                roomId.length ?
                    <div className="font-small text-secondary position-absolute">
                        {
                            isValid ?
                                <Link to={getRoomURL()}>Otevřit hlasování</Link> :
                                <span>Přednáška neexistuje...</span>
                        }
                    </div> : null
            }
        </div>
    )
}