/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  if (!movie || Object.keys(movie).length === 0) {
    return <div>No movie details available.</div>;
  }

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
        <strong>Year:</strong> {movie.Year || "N/A"}
      </p>
      <p className="text-gray-700">
        <strong>Type:</strong> {movie.Type || "N/A"}
      </p>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300"
        }
        alt={movie.Title}
        className="mt-4"
      />
      <p className="mt-2">
        <strong>Plot:</strong> {movie.Plot || "Plot not available."}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director || "N/A"}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors || "N/A"}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre || "N/A"}
      </p>
    </div>
  );
};

export default MovieDetails;

