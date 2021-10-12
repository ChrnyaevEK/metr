import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import Slider from "../Widgets/Slider/Slider";
import {useState} from "react";
import {displayOptions} from "../../../share";

interface IQuestionGroup {
    questions: JSX.Element[]
}

function QuestionGroup(props: IQuestionGroup) {
    return (
        <div className="card shadow mb-2">
            <div className="card-body">
                {props.questions}
            </div>
        </div>
    )
}

export function ReviewPage() {
    const questions: NumericQuestion[] = [
        {
            display_option: 'numeric_range_maximum',
            value: 10
        },
        {
            display_option: 'numeric_range_optimum',
            value: 50
        },
        {
            display_option: 'numeric_range_optimum',
            value: 50
        }
    ]

    const [presentation, setPresentation]: [boolean, any] = useState(false)

    return (
        <div>
            {!presentation ? <div className="font-big d-flex justify-content-between">
                <strong>Lektor @ xxyyzz</strong>
                <button className="btn"><FontAwesomeIcon icon={faShareAlt}/></button>
            </div> : null}
            {!presentation ?
                <div className="font-small text-success mb-3"><strong>22 online 14:20</strong></div> : null}
            {
                displayOptions.map((op: string) => {
                    let qs = []
                    for (let q of questions) {
                        if (q.display_option === op) {
                            qs.push(<Slider title="Test"
                                            value={q.value}
                                            display_option={q.display_option}
                                            use_color={true}/>)
                        }
                    }
                    return qs.length ? <QuestionGroup questions={qs}/> : null
                })
            }
            <div className="d-flex justify-content-end font-small align-items-center">
                {!presentation ? <a href="#" className="mr-2">Export dat</a> : null}
                <button className="btn btn-sm border text-secondary" onClick={(e) => setPresentation(!presentation)}>
                    {presentation ? 'Zpět' : 'Prezentace'}
                </button>
            </div>
        </div>
    )
}

export default ReviewPage