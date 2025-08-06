import React, { useState, useRef } from 'react';

interface PhotoCardProps {
  title: string;
  description?: string;
  defaultImage?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ title, description, defaultImage }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(defaultImage || null);
  const [isUploaded, setIsUploaded] = useState(!!defaultImage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      setIsUploaded(true);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="photo-card card">
      <h3>{title}</h3>
      {description && <p className="photo-description">{description}</p>}
      
      <div className="photo-container">
        {!isUploaded ? (
          <div className="upload-area" onClick={handleUploadClick}>
            <div className="upload-placeholder">
              <span className="upload-icon">+</span>
              <p>Click to upload your design</p>
            </div>
          </div>
        ) : (
          <div className="photo-display">
            <img 
              src={imageSrc || ''} 
              alt={title} 
              className="photo-image" 
            />
          </div>
        )}
      </div>
      
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        accept="image/*" 
        style={{ display: 'none' }} 
      />
      
      {isUploaded && (
        <button className="change-photo-btn" onClick={handleUploadClick}>
          Change Image
        </button>
      )}
    </div>
  );
};

export default PhotoCard;