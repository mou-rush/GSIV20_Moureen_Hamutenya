import React from "react";
import { useQuery } from "react-query";
import Movie from "./Movie";
import "./Movies.css";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

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
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <section className="grid">
          {data.results.map((movie) => {
            const {
              id,
              vote_average,
              overview,
              title,
              poster_path: image,
            } = movie;

            return (
              <Card key={id}>
                {/* <Link to={`/resources/${id}`} style={{ textDecoration: "none" }}> */}
                <CardMedia
                  image={image}
                  title={title}

                  // <h2>{title}</h2>
                  // <p>{overview}</p>
                  // <h1>{vote_average}</h1>
                />
                <CardContent>
                  <h2>{title}</h2>
                  <p>{overview}</p>
                </CardContent>
                {/* </Link> */}
              </Card>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Movies;
