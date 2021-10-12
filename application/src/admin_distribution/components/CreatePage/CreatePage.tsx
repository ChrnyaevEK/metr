import {MouseEvent, ChangeEvent, KeyboardEvent, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {displayOptions, QUESTION_LIMIT} from "../../../share";

interface QuestionType {
    value: string,
    display_option: string,
}

interface QuestionProps extends QuestionType {
    setQuestions: any,
}

function Question(props: QuestionProps) {
    const handleRemoveQuestion = (e: MouseEvent<HTMLButtonElement>) => {
        props.setQuestions((questions: QuestionType[]) => {
            return [...questions.filter(q => q.value !== props.value)]
        })
    }

    return (
        <div className="border px-2 py-0 font-middle d-flex align-items-center mb-1">
            <div className="text-truncate mr-1 flex-grow-1">
                <strong>{props.value}</strong>
            </div>
            <strong className="text-secondary mr-1">{displayOptions[props.display_option]}</strong>
            <button className="btn" onClick={handleRemoveQuestion}>
                <FontAwesomeIcon icon={faTimes} className="text-danger"/>
            </button>
        </div>
    )
}

export function CreatePage() {
    const [questions, setQuestions]: [QuestionType[], any] = useState([])
    const [question, setQuestion]: [QuestionType, any] = useState({display_option: 'numeric_range_optimum', value: ''})

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

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <div className="font-big mb-3 d-flex justify-content-between">
                <strong>Nový dotazník</strong><strong
                className="text-secondary">{questions.length}/{QUESTION_LIMIT}</strong>
            </div>
            <div className="font-middle text-secondary mb-3">
                Přepravte si hodnoty pro sledování a zvolte jejich skupinu
            </div>
            {
                questions.map(
                    (q, i) => <Question setQuestions={setQuestions} display_option={q.display_option} value={q.value}
                                        key={q.value}/>
                )
            }
            <div className="form-group d-flex mb-3">
                <label htmlFor="create-page-question-input" className="w-50 m-0 mr-1">
                    <input type="text" id="create-page-question-input" className="form-control"
                           value={question.value}
                           onChange={handleSetQuestionValue}
                           onKeyPress={handleAddQuestionKeyPress}
                           disabled={questions.length === QUESTION_LIMIT}
                           placeholder="Zadejte hodnotu..."/>
                </label>
                <div className="d-flex w-50">
                    <select value={question.display_option} onChange={handleSetDisplayOption}
                            className="form-control mr-1"
                            id="create-page-display-type-selection" disabled={questions.length === QUESTION_LIMIT}>
                        {
                            Object.entries(displayOptions).map(([k, v], i) => <option value={k}>{v}</option>)
                        }
                    </select>
                    <button className="btn btn-success" onClick={handleAddQuestionButtonPress}
                            disabled={!question.value.length || questions.includes(question) || questions.length === QUESTION_LIMIT}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </div>
            <button className="btn btn-success w-100"
                    disabled={!questions.length || questions.length > QUESTION_LIMIT}>Pokračovat
            </button>
        </div>
    );
}

export default CreatePage;
