import "./Slider.css"
import $ from "jquery";
import {createRef, LegacyRef, Ref, useEffect, useState} from "react";

interface SliderProps {
    title: string,
    min: number,
    max: number,
    step: number,
    value: number,
    use_color: boolean
}

function generateRangeColor(value: number) {
    return 'hue-rotate(-' + 2 * value + 'deg)'
}

export function Slider(props: SliderProps) {
    const [rangeStyle, setRangeStyle] = useState(generateRangeColor(props.value))
    useEffect(() => {
        setRangeStyle(generateRangeColor(props.value))
    }, [props.value])

    return (
        <div className="d-flex flex-column mb-2">
            <div className="font-middle text-truncate"><strong>{props.title}</strong></div>
            <input style={{'filter': rangeStyle}} type="range" className="slider" min={props.min} max={props.max}
                   value={props.value}/>
            <div className="d-flex justify-content-between font-tiny text-secondary">
                <span>Nizký</span>
                <span>Optimální</span>
                <span>Vysoký</span>
            </div>
        </div>
    )
}

export default Slider