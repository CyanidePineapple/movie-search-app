/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { fetchMovies, fetchMovieDetails } from './api/ombd'; 

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (searchTerm) => {
    const results = await fetchMovies(searchTerm); 
    setMovies(results.Search); 
  };

  const handleMovieClick = async (movie) => {
    const movieDetails = await fetchMovieDetails(movie.imdbID); 
    setSelectedMovie(movieDetails); 
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Find Your Movie</h1>
      {!selectedMovie ? (
        <>
          <SearchBar onSearch={handleSearch} />
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </>
      ) : (
        <MovieDetails movie={selectedMovie} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default App;
