import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_SERVICES_REQUEST, fetchServicesFailure, fetchServicesSuccess } from "./serviceActions";

function* fetchServicesSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://admin.naxa.com.np/api/services"
    );
    yield put(fetchServicesSuccess(response.data));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

function* watchFetchServices() {
  yield takeEvery(FETCH_SERVICES_REQUEST, fetchServicesSaga);
}

export default watchFetchServices;
