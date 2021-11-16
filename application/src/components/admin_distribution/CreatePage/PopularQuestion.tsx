import {displayOptions} from "../../../share";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";

export function PopularQuestion(props: {
    question: QuestionPrototype,
    questions: QuestionPrototype[],
    handleUseQuestion: (usedQuestion: QuestionPrototype) => void,
    validateQuestionAcceptable: (controlledQuestion: QuestionPrototype) => boolean,
}) {
    const [isQuestionAcceptable, setIsQuestionAcceptable] = useState(true)

    useEffect(() => {
        setIsQuestionAcceptable(props.validateQuestionAcceptable(props.question))
    }, [props.questions, props])

    return (
        <div className="border rounded p-2 font-middle d-flex align-items-baseline mb-1">
            <div className="flex-grow-1 text-break mr-2 font-weight-bold">{props.question.value}</div>
            <div className="text-secondary mr-2">{displayOptions[props.question.display_option].title}</div>
            <Button variant="success" size="sm" disabled={!isQuestionAcceptable} onClick={(e) => {
                props.handleUseQuestion(props.question)
            }}>
                Přidat
            </Button>
        </div>
    )
}

export default PopularQuestion