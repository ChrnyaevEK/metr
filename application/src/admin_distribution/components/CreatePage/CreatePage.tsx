import {MouseEvent, ChangeEvent, KeyboardEvent, useState, useEffect, useRef, useLayoutEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {displayOptions, QUESTION_LIMIT} from "../../../share";
import {createRoomNoStore} from "../../../core/actions/room_actions";
import {createQuestionNoStore} from "../../../core/actions/questions_actions";
import {useHistory} from "react-router-dom";

interface IQuestionProps {
    question: QuestionType,
    setQuestions: any,
    lock: boolean,
}

function Question(props: IQuestionProps) {
    const handleRemoveQuestion = (e: MouseEvent<HTMLButtonElement>) => {
        props.setQuestions((questions: QuestionType[]) => {
            return [...questions.filter(q => q.value !== props.question.value)]
        })
    }

    return (
        <div className="border px-2 py-0 font-middle d-flex align-items-center mb-1">
            <div className="text-truncate mr-1 flex-grow-1">
                <strong>{props.question.value}</strong>
            </div>
            <strong className="text-secondary mr-1">{displayOptions[props.question.display_option].title}</strong>
            <button className="btn" onClick={handleRemoveQuestion} disabled={props.lock}>
                <FontAwesomeIcon icon={faTimes} className="text-danger"/>
            </button>
        </div>
    )
}

export function CreatePage() {
    const history = useHistory()

    const [lock, setLock]: [boolean, any] = useState(false)

    const [questions, setQuestions]: [QuestionType[], any] = useState([])
    const [question, setQuestion]: [QuestionType, any] = useState({
        id: '',
        room: '',
        time_created: '',
        display_option: 'numeric_range_optimum',
        value: ''
    })

    const handleAddQuestion = () => {
        if (question.value.length && !questions.includes(question) && questions.length < QUESTION_LIMIT) {
            setQuestions([...questions, question])
            setQuestion({...question, value: ''})
        }
    }
    const handleAddQuestionKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddQuestion()
        }
    }
    const handleAddQuestionButtonPress = (e: MouseEvent<HTMLButtonElement>) => handleAddQuestion()
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
        let room = await createRoomNoStore({})  // Create room
        for (let questionTmp of questions) {  // Create all questions
            await createQuestionNoStore({
                ...questionTmp,
                room: room.id
            })
        }
        history.push(`/admin/${room.id}/`)
    }

    return (
        <div>
            <div className="font-big mb-3 d-flex justify-content-between">
                <strong>Nový dotazník</strong><strong
                className="text-secondary">{questions.length}/{QUESTION_LIMIT}</strong>
            </div>
            <div className="font-middle text-secondary mb-3">
                Přepravte si hodnoty pro sledování a zvolte jejich skupinu
            </div>
            {questions.map(
                (q, i) => <Question setQuestions={setQuestions} question={q} lock={lock} key={q.value}/>
            )}
            <div className="form-group d-flex mb-3">
                <label htmlFor="create-page-question-input" className="w-50 m-0 mr-1">
                    <input type="text" id="create-page-question-input" className="form-control"
                           value={question.value}
                           onChange={handleSetQuestionValue}
                           onKeyPress={handleAddQuestionKeyPress}
                           disabled={questions.length === QUESTION_LIMIT || lock}
                           placeholder="Zadejte hodnotu..."/>
                </label>
                <div className="d-flex w-50">
                    <select value={question.display_option} onChange={handleSetDisplayOption}
                            className="form-control mr-1"
                            id="create-page-display-type-selection"
                            disabled={questions.length === QUESTION_LIMIT || lock}>
                        {
                            Object.entries(displayOptions)
                                .map(([k, v], i) => <option key={k} value={k}>{v.title}</option>)
                        }
                    </select>
                    <button className="btn btn-success" onClick={handleAddQuestionButtonPress}
                            disabled={!question.value.length || questions.includes(question) || questions.length === QUESTION_LIMIT || lock}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </div>
            <button className="btn btn-success w-100"
                    onClick={handleContinue}
                    disabled={!questions.length || questions.length > QUESTION_LIMIT || lock}>Pokračovat
            </button>
        </div>
    );
}

export default CreatePage;
