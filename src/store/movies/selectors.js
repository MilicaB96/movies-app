export const selectMovies = (state) => state.movie.movies;
export const selectSearch = (state) => state.movie.search;
export const selectCount = (state) => state.movie.selectedMovies.length;
export const selectSelectedMovies = (state) => state.movie.selectedMovies;
