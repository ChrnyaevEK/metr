import {MouseEvent, ChangeEvent, KeyboardEvent, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";

interface QuestionProps {
    value: string,
    setQuestions: any,
}

function Question(props: QuestionProps) {
    const handleRemoveQuestion = (e: MouseEvent<HTMLButtonElement>) => {
        props.setQuestions((questions: string[]) => {
            return [...questions.filter(q => q !== props.value)]
        })
    }

    return (
        <div className="border px-2 py-0 font-middle d-flex justify-content-between align-items-center mb-1">
            <strong className="text-truncate">{props.value}</strong>
            <button className="btn" onClick={handleRemoveQuestion}>
                <FontAwesomeIcon icon={faTimes} className="text-danger m-1"/>
            </button>
        </div>
    )
}

export function CreatePage() {
    const [questions, setQuestions]: [string[], any] = useState([])
    const [question, setQuestion]: [string, any] = useState('')
    const questionsLimit = 5  // TODO move to env file
    const [displayOption, setDisplayOption]: [string, any] = useState('numeric_range_optimum')

    const handleAddQuestion = () => {
        if (question.length && !questions.includes(question) && questions.length < questionsLimit) {
            setQuestions([...questions, question])
            setQuestion('')
        }
    }
    const handleAddQuestionKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddQuestion()
        }
    }
    const handleAddQuestionButtonPress = (e: MouseEvent<HTMLButtonElement>) => handleAddQuestion()
    const handleSetQuestionValue = (e: ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)
    const handleSetDisplayOption = (e: ChangeEvent<HTMLSelectElement>) => setDisplayOption(e.target.value)

    return (
        <div>
            <div className="font-big mb-3 d-flex justify-content-between">
                <strong>Nový dotazník</strong><strong
                className="text-secondary">{questions.length}/{questionsLimit}</strong>
            </div>
            <div className="font-middle text-secondary mb-3">Přepravte si hodnoty pro sledování. Jednoduché výrazy
                je nejlepší volba!
            </div>
            {
                questions.map(
                    (q, i) => <Question setQuestions={setQuestions} value={q} key={q}/>
                )
            }
            <div className="form-group d-flex mb-3">
                <label htmlFor="create-page-question-input" className="w-50 m-0 mr-1">
                    <input type="text" id="create-page-question-input" className="form-control"
                           value={question}
                           onChange={handleSetQuestionValue}
                           onKeyPress={handleAddQuestionKeyPress}
                           disabled={questions.length === questionsLimit}
                           placeholder="Zadejte hodnotu..."/>
                </label>
                <div className="d-flex w-50">
                    <select value={displayOption} onChange={handleSetDisplayOption} className="form-control mr-1"
                            id="create-page-display-type-selection" disabled={questions.length === questionsLimit}>
                        <option value="numeric_range_optimum">Optimum</option>
                        <option value="numeric_range_maximum">Maximum</option>
                    </select>
                    <button className="btn btn-success" onClick={handleAddQuestionButtonPress}
                            disabled={!question.length || questions.includes(question) || questions.length === questionsLimit}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
            </div>
            <button className="btn btn-success w-100"
                    disabled={!questions.length || questions.length > questionsLimit}>Pokračovat
            </button>
        </div>
    );
}

export default CreatePage;
