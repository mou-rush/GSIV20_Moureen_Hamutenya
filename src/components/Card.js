import React from "react";

const base_url = "https://image.tmdb.org/t/p/original/";

const Movie = ({ movie, isLargeRow }) => {
  return (
    <div className="myGallery">
      <img
        src={`${base_url}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.title}
      />
      <div className="details">
        <h4 className="country-name">{movie.title}</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
