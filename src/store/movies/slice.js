import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    search: "",
    selectedMovies: [],
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
    removeSelectedMovie: (state, action) => {
      state.selectedMovies = state.selectedMovies.filter(
        (item) => item !== action.payload
      );
    },
    selectAllMovies: (state) => {
      state.selectedMovies = state.movies.map((item) => item.id);
    },
    deselectAllMovies: (state) => {
      state.selectedMovies = [];
    },
  },
});
export const {
  addMovies,
  addSearch,
  addSelectedMovie,
  removeSelectedMovie,
  selectAllMovies,
  deselectAllMovies,
} = counterSlice.actions;
export default counterSlice.reducer;
