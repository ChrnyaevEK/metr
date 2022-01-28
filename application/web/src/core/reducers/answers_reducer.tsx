import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    answers: AnswerType[],
}

const initialState: IState = {
    answers: [],
}

export const answersReducer = (state: IState = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'answers/create':
        case 'answers/retrieve':
            return {
                ...state,
                answers: [
                    ...state.answers.filter((a) => a.id !== action.payload.id),
                    action.payload,
                ]
            }
        case 'answers/list':
            return {
                ...state,
                answers: action.payload
            }
        default:
            return state
    }
}

export default answersReducer