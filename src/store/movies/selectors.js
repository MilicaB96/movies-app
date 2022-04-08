export const selectMovies = (state) => {
  const sortBy = state.movie.sortBy;
  let movies = [...state.movie.movies];
  switch (sortBy) {
    case "nameAsc":
      movies = movies.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
      break;
    case "nameDesc":
      movies = movies.sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
      );
      break;
    case "durationAsc":
      movies = movies.sort((a, b) => a.duration - b.duration);
      break;
    case "durationDesc":
      movies = movies.sort((a, b) => b.duration - a.duration);
      break;
  }
  return movies.slice(
    (state.movie.currentPage - 1) * 5,
    state.movie.currentPage * 5
  );
};
// selectMovies = (state) => {

// };

export const selectSearch = (state) => state.movie.search;
export const selectCount = (state) => state.movie.selectedMovies.length;
export const selectSelectedMovies = (state) => state.movie.selectedMovies;
export const sortMovie = (state) => {
  return state.movie.movies.sort();
};
export const selectIsAllSelected = (state) => state.movie.isAllSelected;
export const selectErrors = (state) => state.movie.errors;
