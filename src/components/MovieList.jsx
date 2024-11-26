/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onMovieClick }) => {
  if (!Array.isArray(movies)) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => onMovieClick(movie.imdbID)}
          className="border p-4 cursor-pointer hover:bg-gray-100 transition"
        >
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

