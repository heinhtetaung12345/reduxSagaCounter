import {
  INCREMENT_REQUEST,
  INCREMENT_SUCCESSED,
  DECREMENT_REQUEST,
  DECREMENT_SUCCESSED,
  MULTI_REQUEST,
  MULTI_SUCCEED,
  RESET_REQUEST,
  RESET_SUCCEED,
  TEXT_REQUEST,
  TEXT_SUCCEED,
  INPUT_REQUEST,
  INPUT_SUCCEED
} from "../src/action/actionTypes";
//saga effects
import { delay } from "redux-saga";
import { put, takeEvery, takeLatest, select } from "redux-saga/effects";
import { getTimes } from "../src/Selector";

//increaseAction

function* increment(action) {
  console.log(`This is increment saga`, action);
  const value = yield select(getTimes);
  console.log("value from reducers", value);
  const incrementedVal = action.payload + value;
  yield put({ type: "INCREMENT_SUCCESSED", payload: incrementedVal });
}

//decreaseAction

function* decrement(action) {
  console.log(`This is decrement saga `, action);
  const value = yield select(getTimes);
  console.log("value from reducers ", value);
  const decreaseVal = value - action.payload;
  yield put({ type: "DECREMENT_SUCCESSED", payload: decreaseVal });
}

//multiAction
function* multiAction(action) {
  console.log(`This is multi saga `, action);
  const value = yield select(getTimes);
  console.log("value from reducers ", value);
  const multiVal = value * action.payload;
  yield put({ type: "MULTI_SUCCEED", payload: multiVal });
}

//resetAction
function* resetAction(action) {
  console.log(`This is reset saga `, action);
  const value = yield select(getTimes);
  console.log("value from reducers ", value);
  const resetVal = action.payload;
  yield put({ type: "RESET_SUCCEED", payload: resetVal });
}

//textAction
function* textAction(action) {
  console.log(`This is text saga `, action);
  const textVal = action.payload;
  yield put({ type: "TEXT_SUCCEED", payload: textVal });
}

//inputAction
function* inputAction(action) {
  console.log(`This is input saga  `, action);
  const inputVal = action.payload.num1 * action.payload.num2;
  yield put({ type: "INPUT_SUCCEED", payload: inputVal });
}

//export

export function* watchIncrement() {
  yield takeLatest(INCREMENT_REQUEST, increment);
}

export function* watchDecrement() {
  yield takeLatest(DECREMENT_REQUEST, decrement);
}

export function* watchMultiAction() {
  yield takeLatest(MULTI_REQUEST, multiAction);
}

export function* watchReset() {
  yield takeLatest(RESET_REQUEST, resetAction);
}

export function* watchText() {
  yield takeLatest(TEXT_REQUEST, textAction);
}

export function* watchInput() {
  yield takeLatest(INPUT_REQUEST, inputAction);
}
