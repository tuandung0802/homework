import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "./reducers";
import rootWatcher from "./watchers";

const saga = createSagaMiddleware();
const middleware = [saga];
const store = createStore(rootReducer, applyMiddleware(...middleware));

saga.run(rootWatcher);
export default store;
