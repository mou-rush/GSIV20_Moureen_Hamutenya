import React from "react";
import { useQuery } from "react-query";
import Movie from "./Card";
import { getMovies } from "../API";

const Movies = () => {
  const { data, status } = useQuery("movie", getMovies);

  return (
    <>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map((movie) => (
            <Movie key={movie.title} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
