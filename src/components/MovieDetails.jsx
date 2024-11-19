/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  if (!movie) return null; 

  return (
    <div className="p-4">
      <button
        onClick={onBack}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Back to Results
      </button>
      <h1 className="text-2xl font-bold">{movie.Title}</h1>
      <p className="text-gray-700">
        <strong>Year:</strong> {movie.Year}
      </p>
      <p className="text-gray-700">
        <strong>Type:</strong> {movie.Type}
      </p>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        alt={movie.Title}
        className="mt-4"
      />
    </div>
  );
};

export default MovieDetails;
