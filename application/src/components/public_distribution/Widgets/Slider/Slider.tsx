import {displayOptions} from "../../../../share";
import "./Slider.css"

interface ISlider {
    question: QuestionType,
    onChangeHandler: (value: string) => any,
}

export function Slider(props: ISlider) {
    return (
        <div className="form-group">
            <label htmlFor="formControlRange" className="font-middle">
                <strong>{props.question.value}</strong></label>
            <input type="range" min="0" max="100" className="form-control-range" onChange={(e) => {
                props.onChangeHandler(e.target.value)
            }} id="formControlRange"/>
            <div className="d-flex justify-content-between">
                {
                    displayOptions[props.question.display_option].text_equivalents.map((v) => {
                        return <span key={v} className="font-small text-secondary">{v}</span>
                    })
                }
            </div>
        </div>
    )
}