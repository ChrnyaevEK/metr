import {PayloadAction} from "@reduxjs/toolkit";

interface IState {
    room: RoomType | null,
}

const initialState: IState = {
    room: null,
}

export const roomsReducer = (state: IState = initialState, action: PayloadAction<any>) => {
    switch (action.type) {
        case 'rooms/unset':
            return {
                ...state,
                room: {}
            }
        case 'rooms/create':
        case 'rooms/update':
        case 'rooms/partial_update':
        case 'rooms/retrieve':
            return {
                ...state,
                room: action.payload
            }
        default:
            return state
    }
}

export default roomsReducer