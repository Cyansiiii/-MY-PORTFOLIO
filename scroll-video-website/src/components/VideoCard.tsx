import React, { useState, useRef } from 'react';

interface VideoCardProps {
  title: string;
  description?: string;
  defaultThumbnail?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, defaultThumbnail }) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(defaultThumbnail || null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
      setIsUploaded(true);
      
      // Generate thumbnail from the video
      const video = document.createElement('video');
      video.src = videoUrl;
      video.addEventListener('loadeddata', () => {
        video.currentTime = 1; // Set to 1 second to avoid black frame
      });
      
      video.addEventListener('seeked', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailUrl = canvas.toDataURL('image/jpeg');
        setThumbnail(thumbnailUrl);
      });
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-card card">
      <h3>{title}</h3>
      {description && <p className="video-description">{description}</p>}
      
      <div className="video-container">
        {!isUploaded ? (
          <div className="upload-area" onClick={handleUploadClick}>
            {thumbnail ? (
              <img src={thumbnail} alt="Video thumbnail" className="video-thumbnail" />
            ) : (
              <div className="upload-placeholder">
                <span className="upload-icon">+</span>
                <p>Click to upload your video</p>
              </div>
            )}
          </div>
        ) : (
          <div className="video-player" onClick={togglePlay}>
            {!isPlaying && thumbnail && (
              <div className="thumbnail-overlay">
                <img src={thumbnail} alt="Video thumbnail" className="video-thumbnail" />
                <div className="play-button">▶</div>
              </div>
            )}
            <video 
              ref={videoRef} 
              src={videoSrc || undefined} 
              className="video-element"
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        )}
      </div>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        accept="video/*" 
        style={{ display: 'none' }} 
      />
      
      {isUploaded && (
        <button className="change-video-btn" onClick={handleUploadClick}>
          Change Video
        </button>
      )}
    </div>
  );
};

export default VideoCard;