import {displayOptions} from "../../../share";
import {Button} from "react-bootstrap";

export function PopularQuestion(props: {
    question: QuestionPrototype,
    handleUseQuestion: (usedQuestion: QuestionPrototype) => void,
}) {

    return (
        <div className="border rounded p-2 font-middle d-flex align-items-baseline mb-1">
            <div className="flex-grow-1 text-break mr-2 font-weight-bold">{props.question.value}</div>
            <div className="text-secondary mr-2">{displayOptions[props.question.display_option].title}</div>
            <Button variant="success" size="sm" onClick={(e) => {
                props.handleUseQuestion(props.question)
            }}>
                Přidat
            </Button>
        </div>
    )
}

export default PopularQuestion