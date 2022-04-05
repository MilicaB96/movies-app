import React from "react";

function MovieRow({ title, director, imageUrl, duration, releaseDate, genre }) {
  return (
    <div>
      <h4>
        {title}
        {" by "}
        {director}
        <span>
          ({genre},{releaseDate})<em>{duration}</em>
        </span>
      </h4>
    </div>
  );
}

export default MovieRow;
