import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));

initSagas(sagaMiddleware);
