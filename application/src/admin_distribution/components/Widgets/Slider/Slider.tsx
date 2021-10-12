import "./Slider.css"
import {useEffect, useState} from "react";
import {displayOptionValueLines, displayOptionColorShifts} from "../../../../share";

interface SliderProps {
    title: string,
    value: number,
    use_color: boolean
    display_option: string,
}

export function Slider(props: SliderProps) {
    const [rangeStyle, setRangeStyle] = useState(displayOptionColorShifts[props.display_option](props.value))

    useEffect(() => {
        setRangeStyle(displayOptionColorShifts[props.display_option](props.value))
    }, [props.value])

    return (
        <div className="d-flex flex-column mb-2">
            <div className="font-middle text-truncate"><strong>{props.title}</strong></div>
            <input style={{'filter': rangeStyle}} type="range" className="slider" min={0} max={100}
                   value={props.value}/>
            <div className="d-flex justify-content-between font-tiny text-secondary">
                {displayOptionValueLines[props.display_option].map((vl: string) => <span>{vl}</span>)}
            </div>
        </div>
    )
}

export default Slider