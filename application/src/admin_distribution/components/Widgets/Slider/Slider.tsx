import "./Slider.css"
import {useEffect, useState} from "react";
import {displayOptions} from "../../../../share";
import {each} from "jquery";

interface SliderProps {
    question: QuestionType,
    answers: NumericAnswer[],
    room: RoomType

}

export function Slider(props: SliderProps) {
    const [value, setValue]: [number, any] = useState(0)
    const [rangeStyle, setRangeStyle] = useState(displayOptions[props.question.display_option].color_shifter(value))
    useEffect(() => {
        let total = 0
        props.answers.map((ans) => total += ans.value)
        setValue(total)
        setRangeStyle(displayOptions[props.question.display_option].color_shifter(value))
    }, [props.answers])  // TODO check
    return (
        <div className="d-flex flex-column mb-2">
            <div className="font-middle text-truncate"><strong>{props.question.value}</strong></div>
            <input style={{'filter': rangeStyle}} type="range" className="slider" min={0} max={100} value={value} readOnly={true}/>
            <div className="d-flex justify-content-between font-tiny text-secondary">
                {displayOptions[props.question.display_option].text_equivalents.map((vl: string) => <span key={vl}>{vl}</span>)}
            </div>
        </div>
    )
}

export default Slider