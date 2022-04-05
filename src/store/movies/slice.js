import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    search: "",
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    addSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { addMovies, addSearch } = counterSlice.actions;
export default counterSlice.reducer;
