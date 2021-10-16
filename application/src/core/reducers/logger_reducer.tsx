import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    error: ErrorType | null,
}

const initialState: IState = {
    error: null,
}

export const loggerReducer = (state: IState = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'logger/set/error':
            return {
                ...state,
                error: action.payload
            }
        case 'logger/unset/error':
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export default loggerReducer