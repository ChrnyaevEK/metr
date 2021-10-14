import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    client: ClientType | null,
}

const initialState: IState = {
    client: null,
}

export const clientsReducer = (state: IState = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'clients/create':
            state.client = action.payload
            return state
        default:
            return state
    }
}

export default clientsReducer