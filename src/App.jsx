/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }` 
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${movieId}&apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }` 
      );
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const resetToSearchPage = () => {
    setSearchTerm("");
    setMovies([]);
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <header className="w-full mb-4 flex justify-center">
        <img
          src="src/assets/FindYourMovie_Logo-Transparent.png"
          alt="Find Your Movie"
          className="w-[500px] h-[500px] cursor-pointer"
          onClick={resetToSearchPage}
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
          <MovieList movies={movies} onMovieClick={fetchMovieDetails} />
        )}
      </main>
    </div>
  );
}

export default App;
