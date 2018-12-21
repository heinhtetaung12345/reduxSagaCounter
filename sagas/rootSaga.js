//saga effects
import { fork } from "redux-saga/effects";

import {
  watchIncrement,
  watchDecrement,
  watchMultiAction,
  watchReset,
  watchText,
  watchInput
} from "./counterSagas";

// export default function* rootSaga() {

// }
const root = function* root() {
  yield fork(watchIncrement);
  yield fork(watchDecrement);
  yield fork(watchMultiAction);
  yield fork(watchReset);
  yield fork(watchText);
  yield fork(watchInput);


};
export default root;
