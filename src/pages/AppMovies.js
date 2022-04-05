import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieService from "../services/MovieService";
import { addMovies } from "../store/movies/slice";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/movies/selectors";
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
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieRow {...movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppMovies;
