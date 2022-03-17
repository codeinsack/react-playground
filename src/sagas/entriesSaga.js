import { call, put, take } from "redux-saga/effects";
import { ActionType } from "../redux-store/action-types";
import axios from "axios";
import { populateEntries } from "../redux-store/action-creators";

export function* fetchEntries() {
  yield take(ActionType.GET_ENTRIES);
  const { data } = yield call(axios, "http://localhost:3001/entries");
  yield put(populateEntries(data));
}
