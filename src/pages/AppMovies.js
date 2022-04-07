import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieService from "../services/MovieService";
import {
  addMovies,
  deselectAllMovies,
  nextPage,
  previousPage,
  selectAllMovies,
  setSort,
} from "../store/movies/slice";
import { useSelector } from "react-redux";
import {
  selectCount,
  selectMovies,
  selectSearch,
  selectMoviesOnPage,
  selectIsAllSelected,
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
  // search selector
  const search = useSelector(selectSearch);
  const filteredMovies = search
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    : movies;
  // count
  const count = useSelector(selectCount);
  // isSelected
  const isSelected = useSelector(selectIsAllSelected);
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
        <br />
        <button
          onClick={() => {
            dispatch(setSort("nameAsc"));
          }}
        >
          Sort by Name (asc)
        </button>
        <button
          onClick={() => {
            dispatch(setSort("nameDesc"));
          }}
        >
          Sort by Name (desc)
        </button>
        <button
          onClick={() => {
            dispatch(setSort("durationAsc"));
          }}
        >
          {" "}
          Sort by Duration (asc)
        </button>
        <button
          onClick={() => {
            dispatch(setSort("durationDesc"));
          }}
        >
          Sort by Duration (desc)
        </button>
      </ul>
    </div>
  );
}

export default AppMovies;
