/* eslint-disable react/prop-types */
function MovieCard({ movie }) {
    return (
      <div className="border rounded overflow-hidden shadow-lg">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{movie.Title}</h3>
          <p className="text-gray-600">{movie.Year}</p>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
  