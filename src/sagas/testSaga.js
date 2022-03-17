import { take, delay, put, call } from "redux-saga/effects";

function double(number) {
  return number * 2;
}

// take effect
export function* testSaga() {
  while (true) {
    const state = yield take("TEST_MESSAGE");
    const withCall = yield call(double, 12);
    console.log("withCall", withCall);
    const withoutCall = yield double(3);
    console.log("withoutCall", withoutCall);
    console.log(state);
  }
}

// put effect
// export function* dispatchTest() {
//   while (true) {
//     yield delay(1000);
//     yield put({ type: "TEST_MESSAGE", payload: "Hello World" });
//   }
// }
