import {PayloadAction} from "@reduxjs/toolkit";
import Rollbar from "rollbar";

interface IState {
    warning: string | null,
    http_error: ErrorType | null,
    http_errors: ErrorType[],
    ws_error: ErrorType | null,
    ws_errors: ErrorType[],
}

const rollbar = new Rollbar({
    accessToken: 'f0afe2035b6e4af78cd24816bd6af109',
    enabled: process.env.NODE_ENV === 'production',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

export const loggerReducer = (state: IState = {
    warning: null,
    http_error: null,
    http_errors: [],
    ws_error: null,
    ws_errors: [],
}, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'logger/set_warning':
            return {
                ...state,
                warning: action.payload
            }
        case 'logger/unset_warning':
            return {
                ...state,
                warning: null
            }
        case 'logger/set_http_error':
            let http_errors;
            if (state.http_errors.includes(action.payload.detail)) {
                http_errors = state.http_errors
            } else {
                rollbar.error(action.payload.detail)
                http_errors = [...state.http_errors, action.payload.detail]
            }
            return {
                ...state,
                http_error: action.payload,
                http_errors,
            }
        case 'logger/unset_http_error':
            return {
                ...state,
                http_error: null
            }
        case 'logger/set_ws_error':
            let ws_errors;
            if (state.ws_errors.includes(action.payload.detail)) {
                ws_errors = state.ws_errors
            } else {
                rollbar.error(action.payload.detail)
                ws_errors = [...state.ws_errors, action.payload.detail]
            }
            return {
                ...state,
                ws_error: action.payload,
                ws_errors
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