import React from "react";
import { useParams } from "react-router-dom";
import videos from "../data/videos";
import { Link } from "react-router-dom";
import Chat from "../components/Chat";

const VideoPlayerPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) return <h2>Video not found</h2>;

  // Filtrar videos relacionados (excluyendo el actual)
  const relatedVideos = videos.filter((v) => v.id !== id);

  return (
    <div className="video-container">
      {/* Reproductor de video */}
      <video width="100%" controls>
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Información del video */}
      <h1>{video.title}</h1>
      <p><strong>{video.channel}</strong> - {video.views} views</p>
      <p>{video.description}</p>

      {/* Videos Relacionados */}
      <h3>Related Videos</h3>
      <div className="related-videos">
        {relatedVideos.map((related) => (
          <Link to={`/video/${related.id}`} key={related.id} className="related-video-card">
            <img src={related.thumbnail} alt={related.title} />
            <div>
              <h4>{related.title}</h4>
              <p>{related.channel}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayerPage;