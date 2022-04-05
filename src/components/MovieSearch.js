import React from "react";
import { useDispatch } from "react-redux";
import { addSearch } from "../store/movies/slice";
function MovieSearch() {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => {
          dispatch(addSearch(e.target.value));
        }}
      />
    </div>
  );
}

export default MovieSearch;
