import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import Slider from "../Widgets/Slider/Slider";

export function ReviewPage() {
    return (
        <div>
            <div className="font-big d-flex justify-content-between">
                <strong>Lektor @ xxyyzz</strong>
                <button className="btn"><FontAwesomeIcon icon={faShareAlt}/></button>
            </div>
            <div className="font-small text-success mb-3"><strong>22 online 14:20</strong></div>

            <Slider title="Test" min={0} max={100} step={1} value={0} use_color={true}/>
            <Slider title="Test" min={0} max={100} step={1} value={20} use_color={true}/>
            <Slider title="Test" min={0} max={100} step={1} value={40} use_color={true}/>
            <Slider title="Test" min={0} max={100} step={1} value={60} use_color={true}/>
            <Slider title="Test" min={0} max={100} step={1} value={80} use_color={true}/>
            <Slider title="Test" min={0} max={100} step={1} value={100} use_color={true}/>

            <div className="d-flex justify-content-between font-small align-items-center">
                <a href="#">Export dat</a>
                <button className="btn btn-sm btn-light">Dzen mode</button>
            </div>
        </div>
    )
}

export default ReviewPage