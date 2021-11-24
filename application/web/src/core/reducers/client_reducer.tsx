import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    client: ClientType | null,
}

const initialState: IState = {
    client: null
}

export const clientsReducer = (state: IState = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'client/retrieve':
        case 'client/update':
        case 'client/create':
            return {
                ...state,
                client: action.payload
            }
        default:
            return state
    }
}

export default clientsReducer