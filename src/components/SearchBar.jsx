/* eslint-disable react/prop-types */
const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.searchInput.value;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mt-5">
      <input
        type="text"
        name="searchInput"
        placeholder="Search movies..."
        className="border p-2 w-1/2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
