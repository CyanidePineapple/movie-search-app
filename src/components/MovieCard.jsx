/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => (
  <div className="border p-4 shadow-md">
    <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover" />
    <h3 className="mt-2 font-bold">{movie.Title}</h3>
    <p>{movie.Year}</p>
  </div>
);

export default MovieCard;

  