export const selectMovies = (state) => state.movie.movies;
export const selectSearch = (state) => state.movie.search;
export const selectCount = (state) => state.movie.selectedMovies.length;
export const selectSelectedMovies = (state) => state.movie.selectedMovies;
export const selectMoviesOnPage = (state) =>
  state.movie.movies.slice(
    (state.movie.currentPage - 1) * 5,
    state.movie.currentPage * 5
  );
//
// export const selectSortByNameAsc = (state) =>
//   state.movie.movies.title.sort((a, b) => {state.currentPage * 5
//     if (a.toLowerCase() > b.toLowerCase()) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// export const selectSortByNameDesc = (state) =>
//   state.movie.movies.title.sort((a, b) => {
//     if (a.toLowerCase() < b.toLowerCase()) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// export const selectSortByDurationAsc = (state) =>
//   state.movie.movies.title.sort();
// export const selectSortByDurationDesc = (state) =>
//   state.movie.movies.title.sort().reverse();
