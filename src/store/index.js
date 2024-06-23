import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import servicesReducer from "./serviceReducers";

const rootReducer = combineReducers({
  services: servicesReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
