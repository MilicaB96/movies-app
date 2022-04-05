import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/slice";
export default configureStore({
  reducer: { movie: movieReducer },
});
