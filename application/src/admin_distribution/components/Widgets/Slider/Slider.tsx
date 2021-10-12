import "./Slider.css"
import {useEffect, useState} from "react";

interface SliderProps {
    title: string,
    value: number,
    use_color: boolean
    display_option: string,
}

const displayOptionValueLines: any = {
    'numeric_range_maximum': ['Nizký', 'Střední', 'Optimální'],
    'numeric_range_optimum': ['Nizký', 'Optimální', 'Vysoký'],
}

const displayOptionColorShifts: any = {
    'numeric_range_maximum': (value: number) => 'hue-rotate(-' + value + 'deg)',
    'numeric_range_optimum': (value: number) => 'hue-rotate(-' + 2 * value + 'deg)',
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