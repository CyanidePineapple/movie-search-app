/* eslint-disable no-undef */
import axios from "axios";

const API_KEY = "807df9a";
const BASE_URL = "https://www.omdbapi.com/";

const fetchMovies = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export default fetchMovies;
