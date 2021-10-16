import {applyMiddleware, createStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {combineReducers} from 'redux'
import questionsReducer from "./reducers/questions_reducer";
import answersReducer from "./reducers/answers_reducer";
import roomsReducer from "./reducers/room_reducer";
import loggerReducer from "./reducers/logger_reducer";
import clientsReducer from "./reducers/client_reducer";

const rootReducer = combineReducers({
    clientManager: clientsReducer,
    questionManager: questionsReducer,
    answerManager: answersReducer,
    roomManager: roomsReducer,
    logManager: loggerReducer,
})
export type RootState = ReturnType<typeof rootReducer>;
export default createStore(rootReducer, applyMiddleware(thunk))
