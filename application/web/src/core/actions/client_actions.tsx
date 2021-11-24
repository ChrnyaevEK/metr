import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "@reduxjs/toolkit";
import {viewSet} from "../viewSet";

export const createClient = (data: ClientPrototype) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    return dispatch({
        type: 'client/create',
        payload: await viewSet.create('clients', data),
    }).payload
}
