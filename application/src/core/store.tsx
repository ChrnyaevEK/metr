import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {combineReducers} from 'redux'
import questionsReducer from "./reducers/questions_reducer";
import answersReducer from "./reducers/answers_reducer";
import roomsReducer from "./reducers/room_reducer";

const rootReducer = combineReducers({
    questionsReducer,
    answersReducer,
    roomsReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))