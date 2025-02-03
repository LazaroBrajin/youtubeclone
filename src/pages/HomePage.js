import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import videos from "../data/videos"; // Asegúrate de que `videos` sea un array válido

const HomePage = () => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (query) => {
    const results = videos.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(results);
    setNoResults(results.length === 0);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {noResults && <p className="error">No se encontraron resultados.</p>}
      <div className="video-grid">
        {filteredVideos.map((video) => (
          <Link to={`/video/${video.id}`} key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.channel}</p>
            <p>{video.views} views</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;