import {MouseEvent} from "react";
import {displayOptions} from "../../../share";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";

export function Question(props: {
    question: QuestionPrototype,
    handleRemoveQuestion: (removedQuestion: QuestionPrototype) => void,
    handleEditQuestion: (editedQuestion: QuestionPrototype) => void,
    lock: boolean,
}) {

    return (
        <div className="border rounded px-2 py-1 font-middle d-flex align-items-baseline mb-1">
            <div className="flex-grow-1 text-break mr-2 font-weight-bold">{props.question.value}</div>
            <div className="text-secondary mr-1">{displayOptions[props.question.display_option].title}</div>
            <Button variant="outline-light mr-1" onClick={(e) => {
                props.handleEditQuestion(props.question)
            }} disabled={props.lock}>
                <FontAwesomeIcon icon={faPen} className="text-info"/>
            </Button>
            <Button variant="outline-light" onClick={(e) => {
                props.handleRemoveQuestion(props.question)
            }} disabled={props.lock}>
                <FontAwesomeIcon icon={faTimes} className="text-danger"/>
            </Button>
        </div>
    )
}

export default Question