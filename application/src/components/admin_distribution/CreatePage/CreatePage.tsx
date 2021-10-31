import {MouseEvent, ChangeEvent, KeyboardEvent, useState, useRef, useLayoutEffect, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {DEFAULT_DISPLAY_OPTION, displayOptions, QUESTION_LIMIT} from "../../../share";
import {createRoom} from "../../../core/actions/room_actions";
import {createQuestion} from "../../../core/actions/questions_actions";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../core/store";
import {Button} from "react-bootstrap";

function Question(props: {
    question: QuestionPrototype,
    setQuestions: any,
    lock: boolean,
}) {
    const handleRemoveQuestion = (e: MouseEvent<HTMLButtonElement>) => {
        props.setQuestions((questions: QuestionPrototype[]) => {
            return [...questions.filter(question => question.value !== props.question.value)]
        })
    }

    return (
        <div className="border rounded px-2 py-1 font-middle d-flex align-items-baseline mb-1">
            <div className="flex-grow-1 text-break mr-2 font-weight-bold">{props.question.value}</div>
            <div className="text-secondary mr-2">{displayOptions[props.question.display_option].title}</div>
            <Button variant="outline-light" onClick={handleRemoveQuestion} disabled={props.lock}>
                <FontAwesomeIcon icon={faTimes} className="text-danger"/>
            </Button>
        </div>
    )
}

export function CreatePage() {
    const history = useHistory()
    const dispatch = useDispatch()

    const room = useSelector((state: RootState) => state.roomManager.room)

    const roomRef = useRef(room)

    const [lock, setLock]: [boolean, any] = useState(false)
    const [questions, setQuestions]: [QuestionPrototype[], any] = useState([])
    const [question, setQuestion]: [QuestionPrototype, any] = useState({
        display_option: DEFAULT_DISPLAY_OPTION,
        room: '',
        value: '',
    })
    const [isQuestionAccepted, setIsQuestionAccepted]: [boolean, any] = useState(false)

    const handleAddQuestion = () => {
        if (isQuestionAccepted) {
            setQuestions([...questions, question])
            setQuestion({...question, value: ''})
        }
    }
    const handleAddQuestionKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddQuestion()
        }
    }
    const handleSetQuestionValue = (e: ChangeEvent<HTMLInputElement>) => setQuestion({
        ...question,
        value: e.target.value,
    })
    const handleSetDisplayOption = (e: ChangeEvent<HTMLSelectElement>) => setQuestion({
        ...question,
        display_option: e.target.value
    })

    const handleContinue = async () => {
        setLock(true)  // Lock buttons
        await dispatch(createRoom({}))  // Create room
        for (let q of questions) {  // Create all questions
            q.room = roomRef.current.id
            await dispatch(createQuestion(q))
        }
        history.push(`/admin/${roomRef.current.id}/`)
    }

    useLayoutEffect(() => {
        roomRef.current = room;
    }, [room]);

    useEffect(() => {
        // Check if question is filled right and is unique
        setIsQuestionAccepted(
            question.value.length &&
            questions.length < QUESTION_LIMIT &&
            questions.filter((q) => q.value === question.value).length === 0
        )
    }, [question, questions])

    return (
        <div>
            <div className="font-big font-weight-bold">Nová přednáška</div>
            <div className="font-middle text-secondary mb-3 d-flex justify-content-between">
                <div>Zadejte hodnoty pro sledování</div>
                <div className="text-secondary font-weight-bold">{questions.length}/{QUESTION_LIMIT}</div>
            </div>
            {questions.map((q) => {
                return <Question question={q} setQuestions={setQuestions} lock={lock} key={q.value}/>
            })}
            <div className="form-group d-flex mt-3 mb-1">
                <label htmlFor="create-page-question-input" className="w-50 m-0 mr-1">
                    <input id="create-page-question-input" className="form-control" placeholder="Například rychlost..."
                           autoComplete="off" value={question.value}
                           disabled={questions.length === QUESTION_LIMIT || lock}
                           maxLength={1000} onChange={handleSetQuestionValue} onKeyPress={handleAddQuestionKeyPress}
                    />
                </label>
                <div className="d-flex w-50">
                    <select value={question.display_option} onChange={handleSetDisplayOption}
                            className="form-control mr-1" id="create-page-display-type-selection"
                            disabled={questions.length === QUESTION_LIMIT || lock}>
                        {Object.entries(displayOptions)
                            .map(([key, value]) => {
                                return <option key={key} value={key}>{value.title}</option>
                            })}
                    </select>
                    <Button variant="success" onClick={handleAddQuestion} disabled={!isQuestionAccepted || lock}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                </div>
            </div>
            <Button variant="success" className="w-100 mb-3" onClick={handleContinue}
                    disabled={!questions.length || lock}>
                Pokračovat
            </Button>
            <div className="text-secondary font-middle">
                Zvolte <strong>optimum</strong>, pokud cílová hodnota může být popsána slovem optimální.
                Zvolte <strong>maximum</strong>, pokud cílová
                hodnota by měla být co největší.
            </div>
        </div>
    );
}

export default CreatePage;
