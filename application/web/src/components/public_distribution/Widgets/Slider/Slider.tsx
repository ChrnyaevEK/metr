import {displayOptions} from "../../../../share";
import "./Slider.css"

export function Slider(props: {
    question: QuestionType,
    onChangeHandler: (questionId: string, value: number) => any,
}) {
    return (
        <div className="form-group">
            <label htmlFor="formControlRange"
                   className="font-middle font-weight-bold mb-1 text-break">{props.question.value}</label>
            <input type="range" min="0" max="100" className="form-control-range public-slider" onChange={(e) => {
                props.onChangeHandler(props.question.id, parseInt(e.target.value))
            }} id="formControlRange" defaultValue={displayOptions[props.question.display_option].default_value}/>
            <div className="d-flex justify-content-between mt-1">
                {
                    displayOptions[props.question.display_option].text_equivalents.map((value) => {
                        return <span key={value} className="font-small text-secondary">{value}</span>
                    })
                }
            </div>
        </div>
    )
}