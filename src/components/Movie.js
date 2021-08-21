import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="card">
      <h3>{movie.name}</h3>
    </div>
  );
};

export default Movie;
