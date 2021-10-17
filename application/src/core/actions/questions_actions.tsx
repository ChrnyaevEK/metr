import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "@reduxjs/toolkit";
import {viewSet} from "../viewSet";

export const listQuestions = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'questions/list',
        payload: await viewSet.list('questions'),
    })
}

export const retrieveQuestion = (id: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'questions/retrieve',
        payload: await viewSet.retrieve(id, 'questions'),
    })
}

export const createQuestion = (data: QuestionType) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'questions/create',
        payload: await viewSet.create('questions', data),
    })
}