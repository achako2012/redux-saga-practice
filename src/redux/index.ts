import createSagaMiddleware from 'redux-saga'
import reducer from "./reducers";
// @ts-ignore
import {applyMiddleware, createStore} from "redux";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga )

export default store;
