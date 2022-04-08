import { call, takeLatest, put } from "redux-saga/effects";
import MovieService from "../../services/MovieService";
import {
  addMovie,
  addMovies,
  createMovie,
  getMovies,
  setErrors,
} from "./slice";

function* getMoviesHandler() {
  // console.log("hello from get movies saga");
  try {
    const data = yield call(MovieService.getAll);
    yield put(addMovies(data));
  } catch (error) {
    console.log(error);
  }
}
export function* watchGetMovies() {
  yield takeLatest(getMovies.type, getMoviesHandler);
}

//
function* createMovieHandler(action) {
  try {
    const data = yield call(MovieService.add, action.payload);
    yield put(addMovie(data));
  } catch (error) {
    yield put(setErrors(error.response.data.error.details.messages));
  }
}
export function* watchGetMovie() {
  yield takeLatest(createMovie.type, createMovieHandler);
}
