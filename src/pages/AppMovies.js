import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieService from "../services/MovieService";
import {
  addMovies,
  deselectAllMovies,
  nextPage,
  previousPage,
  selectAllMovies,
} from "../store/movies/slice";
import { useSelector } from "react-redux";
import {
  selectCount,
  selectMovies,
  selectSearch,
  selectSortByDurationAsc,
  selectSortByNameAsc,
  selectSortByNameDesc,
  selectSortByDurationDesc,
  selectMoviesOnPage,
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

  // movies on display
  const moviesOnDipslay = useSelector(selectMoviesOnPage);
  // search selector
  const search = useSelector(selectSearch);
  const filteredMovies = search
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    : moviesOnDipslay;
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
  // handle sort
  // const sortByNameAsc = useSelector(selectSortByNameAsc);
  // const sortByNameDesc = useSelector(selectSortByNameDesc);
  // const sortByDurationAsc = useSelector(selectSortByDurationAsc);
  // const sortByDurationDesc = useSelector(selectSortByDurationDesc);
  console.log(movies);
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
          : search && "There is not such movie!"}
        <button type='button' onClick={handleSelectAll}>
          {isSelected ? "Deselect All" : "Select All"}
        </button>
        <br />
        <button
          type='button'
          className='btn d-inline-block'
          onClick={() => dispatch(previousPage())}
        >
          {"<-"}
        </button>
        <button
          type='button'
          className='btn d-inline-block'
          onClick={() => dispatch(nextPage())}
        >
          {"->"}
        </button>
        {/* <button onClick={() => {}}>Sort by Name (asc)</button>
        <button onClick={() => {}}>Sort by Name (desc)</button>
        <button onClick={() => {}}> Sort by Duration (asc)</button>
        <button onClick={() => {}}>Sort by Duration (desc)</button> */}
      </ul>
    </div>
  );
}

export default AppMovies;
