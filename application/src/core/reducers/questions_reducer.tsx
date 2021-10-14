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
            state.questions = [
                ...state.questions.filter((q) => q.id !== action.payload.id),
                action.payload,
            ]
            return state
        case 'questions/list':
            state.questions = action.payload
            return state
        default:
            return state
    }
}

export default questionsReducer