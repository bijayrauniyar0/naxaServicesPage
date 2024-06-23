import { all } from "redux-saga/effects";
import watchFetchServices from "./serviceSagas";

export default function* rootSaga() {
  yield all([watchFetchServices()]);
}
