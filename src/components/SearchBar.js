import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!query.trim()) {
      setError("Por favor, ingresa un término de búsqueda.");
      return;
    }
    setError("");
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar videos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default SearchBar;