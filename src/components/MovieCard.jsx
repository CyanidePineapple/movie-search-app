/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => (
  <div className="border p-4 shadow-md">
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
);

export default MovieCard;
