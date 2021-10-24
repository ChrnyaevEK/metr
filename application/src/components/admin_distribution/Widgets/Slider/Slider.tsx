import "./Slider.css"
import {useState} from "react";
import {displayOptions} from "../../../../share";

interface SliderProps {
    question: QuestionType,
}

export function Slider(props: SliderProps) {
    const [rangeStyle, setRangeStyle] = useState(displayOptions[props.question.display_option].color_shifter(props.question.rate))
    return (
        <div className="d-flex flex-column mb-2">
            <div className="font-middle text-truncate"><strong>{props.question.value}</strong></div>
            <input style={{'filter': rangeStyle}} type="range" className="slider" min={0} max={100}
                   value={props.question.rate} readOnly={true}/>
            <div className="d-flex justify-content-between font-tiny text-secondary">
                {displayOptions[props.question.display_option].text_equivalents.map((vl: string) => <span
                    key={vl}>{vl}</span>)}
            </div>
        </div>
    )
}

export default Slider