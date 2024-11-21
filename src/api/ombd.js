/* eslint-disable no-undef */
import axios from "axios";

const apiKey = import.meta.env.VITE_OMDB_API_KEY; 

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        s: query,
        apikey: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        i: id,
        apikey: apiKey,
      },
    });

    const movieData = response.data;
    if (movieData && movieData.Plot && movieData.Actors && movieData.Genre) {
      return movieData;
    } else {
      console.error("Incomplete movie data:", movieData);
      return {};
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};
