import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import {displayOptions} from "../../../share";
import {Slider} from "../Widgets/Slider/Slider";

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

export function AnswerPage() {
    const questions: QuestionType[] = [
        {
            id: '1',
            time_created: '',
            room: '',
            value: 'Test question',
            display_option: 'numeric_range_optimum',
        },
        {
            id: '2',
            time_created: '',
            room: '',
            value: 'Test question 2',
            display_option: 'numeric_range_optimum',
        },
        {
            id: '3',
            time_created: '',
            room: '',
            value: 'Test question 2',
            display_option: 'numeric_range_maximum',
        },
    ]

    const room: RoomType = {
        id: 'xxyyzz',
        time_created: '',
        time_updated: '',
        use_color: true
    }

    return (
        <div>
            <div className="font-big d-flex justify-content-between">
                <strong>Student @ {room.id}</strong>
                <button className="btn"><FontAwesomeIcon icon={faShareAlt}/></button>
            </div>
            <div className="font-small text-success mb-3 d-flex justify-content-between">
                <strong>Uloženo!</strong>
                <strong>{room.id} je aktivní</strong>
            </div>
            {
                Object.keys(displayOptions).map((op: string) => {
                    let qs = []
                    for (let q of questions.filter((q) => q.display_option === op)) {
                        qs.push(<Slider question={q} onChangeHandler={(value) => {

                        }}/>)
                    }
                    return qs.length ? <QuestionGroup questions={qs}/> : null
                })
            }
        </div>
    )
}

export default AnswerPage