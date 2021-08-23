export const getMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=a8c5001ebba60e0a9c1250cdcf408e95&language=en-US&page=1"
  );
  return res.json();
};

export const searchMovie = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=a8c5001ebba60e0a9c1250cdcf408e95&query="
  );
  return res.json();
};
