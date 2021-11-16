import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "@reduxjs/toolkit";
import {viewSet} from "../viewSet";

export const listQuestions = (roomId: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'questions/list',
        payload: await viewSet.list('questions', {room: roomId}),
    })
}

export const listPopularQuestions = () => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'popular_questions/list',
        payload: await viewSet.list('popular_questions'),
    })
}

export const retrieveQuestion = (roomId: string, id: string) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'questions/retrieve',
        payload: await viewSet.retrieve(id, 'questions'),
    })
}

export const createQuestion = (data: QuestionPrototype) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => {}) => {
    dispatch({
        type: 'questions/create',
        payload: await viewSet.create('questions', data),
    })
}