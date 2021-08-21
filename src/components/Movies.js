import React from "react";
import { useQuery } from "react-query";
import Movie from "./Movie";

const fetchMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=a8c5001ebba60e0a9c1250cdcf408e95&language=en-US&page=1"
  );
  return res.json();
};

const Movies = () => {
  const { data, status } = useQuery("movie", fetchMovies);

  return (
    <>
      <section className="grid">
        {data.results.map((movie) => {
          const { id, vote_average, overview, title } = movie;

          return (
            <article key={id}>
              {/* <Link to={`/resources/${id}`} style={{ textDecoration: "none" }}> */}
              <div className="details">
                <h2>{title}</h2>
                <h1>{overview}</h1>
                <h1>{vote_average}</h1>
              </div>
              {/* </Link> */}
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Movies;
