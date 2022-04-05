import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
  },
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});
export const { addMovies } = counterSlice.actions;
export default counterSlice.reducer;
