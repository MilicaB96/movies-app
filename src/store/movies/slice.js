import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const middlewareAction = {
  getMovies: () => {},
  createMovie: () => {},
};
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    search: "",
    selectedMovies: [],
    currentPage: 1,
    sortBy: null,
    errors: {},
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    addSelectedMovie: (state, action) => {
      state.selectedMovies.push(action.payload);
    },
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeSelectedMovie: (state, action) => {
      state.selectedMovies = state.selectedMovies.filter(
        (item) => item !== action.payload
      );
    },
    selectAllMovies: (state) => {
      state.selectedMovies = state.movies.map((item) => item.id);
      state.isAllSelected = 1;
    },
    deselectAllMovies: (state) => {
      state.selectedMovies = [];
      state.isAllSelected = 0;
    },
    nextPage: (state) => {
      if (state.currentPage == Math.ceil(state.movies.length / 5)) {
        return;
      } else {
        state.currentPage++;
      }
    },
    previousPage: (state) => {
      if (state.currentPage == 1) {
        return;
      } else {
        state.currentPage--;
      }
    },
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    ...middlewareAction,
  },
});
export const {
  addMovies,
  addSearch,
  addSelectedMovie,
  removeSelectedMovie,
  selectAllMovies,
  deselectAllMovies,
  nextPage,
  previousPage,
  setSort,
  getMovies,
  createMovie,
  addMovie,
  setErrors,
} = movieSlice.actions;
export default movieSlice.reducer;
