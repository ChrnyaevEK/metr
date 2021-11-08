import {ChangeEvent, KeyboardEvent, useState, useRef, useLayoutEffect, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {DEFAULT_DISPLAY_OPTION, displayOptions, QUESTION_LIMIT} from "../../../share";
import {createRoom} from "../../../core/actions/room_actions";
import {createQuestion} from "../../../core/actions/questions_actions";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../core/store";
import {Button} from "react-bootstrap";
import Question from "./Question";

export function CreatePage() {
    const history = useHistory()
    const dispatch = useDispatch()

    const room = useSelector((state: RootState) => state.roomManager.room)

    const roomRef = useRef(room)

    const [lock, setLock]: [boolean, any] = useState(false)
    const [isLimitReached, setIsLimitReached]: [boolean, any] = useState(false)
    const [editMode, setEditMode]: [boolean, any] = useState(false)
    const [editIndex, setEditIndex]: [number | null, any] = useState(null)
    const [isQuestionAccepted, setIsQuestionAccepted]: [boolean, any] = useState(false)
    const [questions, setQuestions]: [QuestionPrototype[], any] = useState([])
    const [question, setQuestion]: [QuestionPrototype, any] = useState({
        display_option: DEFAULT_DISPLAY_OPTION,
        room: '',
        value: '',
    })
    const handleAddQuestion = () => {
        if (isQuestionAccepted) {
            if (editIndex !== null) {
                Object.assign(questions[editIndex], question)
                setEditIndex(null)
            } else {
                setQuestions([...questions, question])
            }
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
    const handleRemoveQuestion = (removedQuestion: QuestionPrototype) => {
        setQuestions((questions: QuestionPrototype[]) => {
            return [...questions.filter(question => question.value !== removedQuestion.value)]
        })
        handleCancelEdition()
    }
    const handleEditQuestion = (editedQuestion: QuestionPrototype) => {
        setEditMode(true)
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].value === editedQuestion.value) {
                setEditIndex(i)
                break;
            }
        }
        setQuestion(editedQuestion)
    }
    const handleCancelEdition = () => {
        setEditMode(false)
        setEditIndex(null)
        setQuestion({
            display_option: DEFAULT_DISPLAY_OPTION,
            room: '',
            value: ''
        })
    }

    useLayoutEffect(() => {
        roomRef.current = room;
    }, [room]);

    useEffect(() => {
        // Check if question is filled right and is unique
        setIsQuestionAccepted(
            question.value.length &&
            (questions.length < QUESTION_LIMIT || editIndex !== null) &&
            questions.filter((q) => q.value === question.value && q.display_option === question.display_option).length === 0
        )
        setIsLimitReached(
            questions.length === QUESTION_LIMIT && editIndex === null
        )
    }, [question, questions])

    return (
        <div>
            <div className="font-big font-weight-bold">Nové hlasování</div>
            <div className="font-middle text-secondary mb-3 d-flex justify-content-between">
                <div>Zadejte hodnoty pro sledování</div>
                <div className="text-secondary font-weight-bold">{questions.length}/{QUESTION_LIMIT}</div>
            </div>
            {questions.map((q) => {
                return <Question question={q}
                                 handleRemoveQuestion={handleRemoveQuestion}
                                 handleEditQuestion={handleEditQuestion}
                                 lock={lock} key={q.value}/>
            })}
            <div className="form-group d-flex mt-3 mb-1">
                <label htmlFor="create-page-question-input" className="w-50 m-0 mr-1">
                    <input id="create-page-question-input" className="form-control" placeholder="Například rychlost..."
                           autoComplete="off" value={question.value}
                           disabled={isLimitReached || lock}
                           maxLength={1000} onChange={handleSetQuestionValue} onKeyPress={handleAddQuestionKeyPress}
                    />
                </label>
                <div className="d-flex w-50">
                    <select value={question.display_option} onChange={handleSetDisplayOption}
                            className="form-control mr-1" id="create-page-display-type-selection"
                            disabled={isLimitReached || lock}>
                        {Object.entries(displayOptions)
                            .map(([key, value]) => {
                                return <option key={key} value={key}>{value.title}</option>
                            })}
                    </select>
                    <Button variant="danger" onClick={handleCancelEdition} className="mr-1"
                            disabled={!editMode || lock}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </Button>
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
