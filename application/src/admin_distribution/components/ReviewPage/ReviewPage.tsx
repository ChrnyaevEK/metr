import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShareAlt} from "@fortawesome/free-solid-svg-icons";
import Slider from "../Widgets/Slider/Slider";
import {KeyboardEvent, useEffect, useState} from "react";
import {displayOptions} from "../../../share";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../core/store";
import {retrieveRoom} from "../../../core/actions/room_actions";
import {listQuestions} from "../../../core/actions/questions_actions";
import {RouteComponentProps} from "react-router";
import {useHistory} from "react-router-dom";

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

type TParams = {
    roomId: string
}

export function ReviewPage({match}: RouteComponentProps<TParams>) {
    const dispatch = useDispatch()
    const history = useHistory()

    const room = useSelector((state: RootState) => state.roomManager.room)
    const questions = useSelector((state: RootState) => state.questionManager.questions)
    const answers = useSelector((state: RootState) => state.answerManager.answers)

    const triggerUpdate = async () => {
        await dispatch(retrieveRoom(match.params.roomId))
        await dispatch(listQuestions(match.params.roomId))
    }

    const handleEsc = (e: any) => {
        if (e.key === 'Escape') {
            setPresentation(false)
        }
    }

    // Retrieve data for the first time, go home on error.
    useEffect(() => {
        (async () => {
            try {
                await triggerUpdate()
            } catch (e) {
                history.push('/home')
            }
        })()
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [])

    const [presentation, setPresentation]: [boolean, any] = useState(false)

    return (
        <div>
            {!presentation ? <div className="font-big d-flex justify-content-between">
                <strong>Lektor @ {room ? room.id : '?'}</strong>
                <button className="btn"><FontAwesomeIcon icon={faShareAlt}/></button>
            </div> : null}
            {!presentation ?
                <div className="font-small text-success mb-3"><strong>22 online 14:20</strong></div> : null}
            {
                Object.keys(displayOptions).map((op: string) => {
                    let qs = []
                    for (let q of questions.filter((q: QuestionType) => q.display_option === op)) {
                        qs.push(<Slider question={q}
                                        key={q.id}
                                        answers={answers.filter((a: AnswerType) => a.question === q.id)}
                                        room={room}/>
                        )
                    }
                    return qs.length ? <QuestionGroup key={op} questions={qs}/> : null
                })
            }
            <div className="d-flex justify-content-end font-small align-items-center">
                {
                    presentation ?
                        <span className="text-secondary">Zmáčknutím <strong>ESC</strong> prezentaci ukončíte</span> :
                        <button className="btn btn-sm border text-secondary" onClick={(e) => setPresentation(true)}>
                            Prezentace
                        </button>
                }
            </div>
        </div>
    )
}

export default ReviewPage