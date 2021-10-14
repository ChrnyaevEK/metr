import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    room: RoomType | null,
}

const initialState: IState = {
    room: null,
}

export const roomsReducer = (state: IState = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'rooms/create':
        case 'rooms/update':
        case 'rooms/partial_update':
        case 'rooms/retrieve':
            state.room = action.payload
            return state
        default:
            return state
    }
}

export default roomsReducer