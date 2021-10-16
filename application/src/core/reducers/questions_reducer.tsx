import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    questions: QuestionType[],
}

const initialState: IState = {
    questions: [],
}

export const questionsReducer = (state: IState = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'questions/create':  // Replace existing object with new one
        case 'questions/retrieve':
            return {
                ...state,
                questions: [
                    ...state.questions.filter((q) => q.id !== action.payload.id),
                    action.payload,
                ]
            }
        case 'questions/list':
            return {
                ...state,
                questions: action.payload
            }
        default:
            return state
    }
}

export default questionsReducer