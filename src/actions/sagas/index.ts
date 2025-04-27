// sagas/index.ts
import { all } from "redux-saga/effects";
import { watchArticleSaga } from "./articleSaga";

export default function* rootSaga() {
  yield all([watchArticleSaga()]);
}
