/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { fetchMovies, fetchMovieDetails } from "./api/ombd";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchMovies(searchTerm);
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const handleMovieClick = async (movieId) => {
    try {
      const movieData = await fetchMovieDetails(movieId);
      setSelectedMovie(movieData);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const handleLogoClick = () => {
    setSearchTerm("");
    setMovies([]);
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <header className="w-full mb-4 flex justify-center">
        <img
          src="/FindYourMovie_Logo-Transparent.png"
          alt="Find Your Movie"
          className="w-[500px] h-[500px] cursor-pointer"
          onClick={handleLogoClick}
        />
      </header>

      <SearchBar
        searchTerm={searchTerm}
        onSearchSubmit={handleSearchSubmit}
        onSearchChange={handleSearchChange}
      />

      <main className="w-full">
        {selectedMovie ? (
          <MovieDetails
            movie={selectedMovie}
            onBack={() => setSelectedMovie(null)}
          />
        ) : (
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        )}
      </main>
    </div>
  );
}

export default App;
