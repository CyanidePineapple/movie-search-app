/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import fetchMovies from "./api/ombd";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 

  const handleSearch = async (query) => {
    if (!query) return;

    try {
      const results = await fetchMovies(query);
      setMovies(results || []);
      setSelectedMovie(null); 
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      alert("Failed to fetch movies. Please try again.");
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); 
  };

  const handleBackToResults = () => {
    setSelectedMovie(null); 
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={handleBackToResults} />
      ) : (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
};

export default App;


