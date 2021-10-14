import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "@reduxjs/toolkit";
import {viewSet} from "../viewSet";

export const retrieveRoom = (id: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'rooms/retrieve',
        payload: await viewSet.retrieve(id, 'rooms'),
    })
}

export const updateRoom = (id: string, data: RoomType) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'rooms/update',
        payload: await viewSet.update(id, 'rooms', data),
    })
}

export const partialUpdateRoom = (id: string, data: RoomType) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'rooms/partial_update',
        payload: await viewSet.partial_update(id, 'rooms', data),
    })
}

export const createRoom = (id: string, data: RoomType) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'rooms/create',
        payload: await viewSet.create('rooms', data),
    })
}
