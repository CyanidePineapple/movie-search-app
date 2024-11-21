/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function SearchBar({ searchTerm, onSearchSubmit, onSearchChange }) {
  const handleSearch = (event) => {
    event.preventDefault(); 
    onSearchSubmit(event); 
  };

  return (
    <div className="w-full max-w-sm mx-auto mb-4">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={onSearchChange}
          className="p-2 w-full border border-gray-300 rounded-l"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white border border-blue-500 rounded-r">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

