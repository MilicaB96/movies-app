import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieService from "../services/MovieService";
import {
  addMovies,
  deselectAllMovies,
  isMovieSelected,
  selectAllMovies,
} from "../store/movies/slice";
import { useSelector } from "react-redux";
import {
  selectCount,
  selectMovies,
  selectSearch,
} from "../store/movies/selectors";
import MovieRow from "../components/MovieRow";
function AppMovies() {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    try {
      const data = await MovieService.getAll();
      dispatch(addMovies(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  // movie selector
  const movies = useSelector(selectMovies);
  // search selector
  const search = useSelector(selectSearch);
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  // count
  const count = useSelector(selectCount);
  // isSelected
  const isSelected = count === movies.length;
  // handle Select All
  const handleSelectAll = () => {
    if (isSelected) {
      dispatch(deselectAllMovies());
    } else {
      dispatch(selectAllMovies());
    }
  };
  return (
    <div>
      <span>Number of selected movies: {count} </span>
      <ul>
        {filteredMovies.length
          ? filteredMovies.map((movie) => (
              <div key={movie.id}>
                <li>
                  <MovieRow {...movie} />
                </li>
              </div>
            ))
          : "No movies have been found by that name!"}
        <button type='button' onClick={handleSelectAll}>
          {isSelected ? "Deselect All" : "Select All"}
        </button>
      </ul>
    </div>
  );
}

export default AppMovies;
