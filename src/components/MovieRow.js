import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, selectSelectedMovies } from "../store/movies/selectors";
import { addSelectedMovie, removeSelectedMovie } from "../store/movies/slice";

function MovieRow(props) {
  // selectedMovies
  const selectedMovies = useSelector(selectSelectedMovies);
  const isSelected = selectedMovies.find((item) => item === props.id);
  const dispatch = useDispatch();
  const handleSelect = () => {
    if (isSelected) {
      dispatch(removeSelectedMovie(props.id));
    } else {
      dispatch(addSelectedMovie(props.id));
    }
  };
  return (
    <div>
      <h4 className='d-inline-block' id='movie'>
        {props.title}
        {" by "}
        {props.director}
        <span>
          ({props.genre},{props.releaseDate})<em>{props.duration}</em>
        </span>
      </h4>
      <button
        className='btn btn-light m-3'
        type='button'
        onClick={handleSelect}
      >
        {isSelected ? "Deselect" : "Select"}
      </button>
    </div>
  );
}

export default MovieRow;
