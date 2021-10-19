import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import Slider from "../Widgets/Slider/Slider";
import {useEffect, useState} from "react";
import {displayOptions} from "../../../share";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../core/store";
import {retrieveRoom} from "../../../core/actions/room_actions";
import {listQuestions} from "../../../core/actions/questions_actions";

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
    const dispatch = useDispatch()

    const room = useSelector((state: RootState) => state.roomManager.room)
    const questions = useSelector((state: RootState) => state.questionManager.questions)
    const answers = useSelector((state: RootState) => state.answerManager.answers)

    useEffect(() => {
        (async () => {
            await dispatch(retrieveRoom())
            await dispatch(listQuestions())

        })()
    }, [])

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
                Object.keys(displayOptions).map((op: string) => {
                    let qs = []
                    for (let q of questions.filter((q) => q.display_option === op)) {
                        qs.push(<Slider question={q} answers={answers.filter((a) => a.question === q.id)} room={room}/>)
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