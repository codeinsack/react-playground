import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";
import { testSaga } from "../sagas/testSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];

export const store = createStore(reducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(testSaga);
