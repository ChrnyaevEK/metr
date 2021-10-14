import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "@reduxjs/toolkit";
import {viewSet} from "../viewSet";

export const createClient = (data: ClientType) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'clients/create',
        payload: await viewSet.create('clients', data),
    })
}
