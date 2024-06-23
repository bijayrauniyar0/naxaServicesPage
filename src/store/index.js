//Really sad to use legacy_createStore which is deprecated but the redux saga itself is deprecated so it is what it is sadly
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
//@ts-expect-error TODO fix later
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
