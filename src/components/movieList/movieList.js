import React from "react";
import MovieCard from "../MovieCard/MovieCard.js";

const MovieList = ({ movies, inputSearch, setRatting, ratting }) => {
  return (
    <div className="movieList">
      {movies
        .filter(
          (movie) =>
            movie.title.toUpperCase().includes(inputSearch.toUpperCase()) &&
            movie.rate >= ratting
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default MovieList;
