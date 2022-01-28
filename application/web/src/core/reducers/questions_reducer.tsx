import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    questions: QuestionType[],
    popularQuestions: QuestionPrototype[],
}

const initialState: IState = {
    questions: [],
    popularQuestions: []
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
        case 'popular_questions/list':
            return {
                ...state,
                popularQuestions: action.payload
            }
        default:
            return state
    }
}

export default questionsReducer