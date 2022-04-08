import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieErrors from "../components/MovieErrors";
import { selectErrors } from "../store/movies/selectors";
import { createMovie, setErrors } from "../store/movies/slice";

function AddMovie() {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector(selectErrors);
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    imageUrl: "",
    duration: "",
    releaseDate: "",
    genre: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setErrors({}));
    dispatch(createMovie(movie));
    console.log(errors);
    if (Object.keys(errors).length === 0) history.push("/movies");
  };
  return (
    <div>
      <form className='form-group p-5' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='title'
          value={movie.title}
          onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        />
        <br />
        <input
          type='text'
          className='form-control'
          placeholder='director'
          value={movie.director}
          onChange={(e) => setMovie({ ...movie, director: e.target.value })}
        />
        <br />
        <input
          type='text'
          className='form-control'
          placeholder='imageUrl'
          value={movie.imageUrl}
          onChange={(e) => setMovie({ ...movie, imageUrl: e.target.value })}
        />
        <br />
        <input
          type='number'
          className='form-control'
          placeholder='duration'
          value={movie.duration}
          onChange={(e) => setMovie({ ...movie, duration: e.target.value })}
        />
        <br />
        <input
          type='date'
          className='form-control'
          placeholder='releaseDate'
          value={movie.releaseDate}
          onChange={(e) => setMovie({ ...movie, releaseDate: e.target.value })}
        />
        <br />
        <input
          type='text'
          className='form-control'
          placeholder='genre'
          value={movie.genre}
          onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
        />
        <br />
        {errors && <MovieErrors {...errors} />}
        <br />
        <button className='btn m-3'>Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
