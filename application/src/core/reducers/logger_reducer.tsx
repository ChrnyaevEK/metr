import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    http_error: ErrorType | null,
    ws_error: ErrorType | null,
}

const initialState: IState = {
    http_error: null,
    ws_error: null,
}

export const loggerReducer = (state: IState = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'logger/set_http_error':
            return {
                ...state,
                http_error: action.payload
            }
        case 'logger/unset_http_error':
            return {
                ...state,
                http_error: null
            }
        case 'logger/set_ws_error':
            return {
                ...state,
                ws_error: action.payload
            }
        case 'logger/unset_ws_error':
            return {
                ...state,
                ws_error: null
            }
        default:
            return state
    }
}

export default loggerReducer