/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          onClick={() => onMovieClick(movie)}
          className="border p-4 cursor-pointer hover:bg-gray-100 transition"
        >
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/150"
            }
            alt={movie.Title}
            className="mb-2"
          />
          <h3 className="font-bold">{movie.Title}</h3>
          <p className="text-sm text-gray-600">{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
