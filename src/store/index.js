import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "./movies/slice";
import createSagaMiddleware from "@redux-saga/core";
import sagas from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: { movie: movieReducer },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
