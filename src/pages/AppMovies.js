import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieService from "../services/MovieService";
import { addMovies } from "../store/movies/slice";
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
  return <div></div>;
}

export default AppMovies;
