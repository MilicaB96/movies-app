import React from "react";

function MovieErrors({
  director,
  duration,
  genre,
  imageUrl,
  releaseDate,
  title,
}) {
  return (
    <div className='text-danger'>
      <p>{director && `Director ${director}`}</p>
      <p>{duration && `Duration ${director}`}</p>
      <p>{genre && `Genre ${director}`}</p>
      <p>{imageUrl && `Image URL ${director}`}</p>
      <p>{releaseDate && `Release Date ${director}`}</p>
      <p>{title && `Title ${director}`}</p>
    </div>
  );
}

export default MovieErrors;
