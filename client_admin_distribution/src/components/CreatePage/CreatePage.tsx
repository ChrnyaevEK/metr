import {MouseEvent, ChangeEvent, useState} from "react";
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
        <div className="border shadow-sm p-2 font-middle d-flex justify-content-between align-items-center mb-1">
            <strong className="text-truncate">{props.value}</strong>
            <button className="btn btn-light" onClick={handleRemoveQuestion}>
                <FontAwesomeIcon icon={faTimes} className="text-danger m-1"/>
            </button>
        </div>
    )
}

export function CreatePage() {
    const [questions, setQuestions]: [string[], any] = useState([])
    const [question, setQuestion]: [string, any] = useState('')
    const questionsLimit = 5  // TODO move to env file


    const handleAddQuestion = (e: MouseEvent<HTMLButtonElement>) => {
        setQuestions([...questions, question])
        setQuestion('')
    }

    const handleSetQuestionValue = (e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value)
    }

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
                <label htmlFor="create-page-question-input" className="w-100 m-0 mr-1">
                    <input type="text" id="create-page-question-input" className="form-control"
                           value={question}
                           onChange={(handleSetQuestionValue)}
                           placeholder="Rychlost..."/>
                </label>
                <button className="btn btn-success" onClick={handleAddQuestion}
                        disabled={!question.length || questions.includes(question)}><FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <button className="btn btn-success w-100"
                    disabled={!questions.length || questions.length >= questionsLimit}>Pokračovat
            </button>
        </div>
    );
}

export default CreatePage;
