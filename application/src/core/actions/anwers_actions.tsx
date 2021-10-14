import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "@reduxjs/toolkit";
import {viewSet} from "../viewSet";

export const listAnswers = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'answers/list',
        payload: await viewSet.list('answers'),
    })
}

export const retrieveAnswer = (id: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'answers/retrieve',
        payload: await viewSet.retrieve(id, 'answers'),
    })
}

export const createAnswer = (data: AnswerType) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'answers/create',
        payload: await viewSet.create('answers', data),
    })
}
