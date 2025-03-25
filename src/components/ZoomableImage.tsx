import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import ImageViewer from './ImageViewer';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt, className }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openViewer = () => {
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="relative group cursor-zoom-in" onClick={openViewer}>
        <img 
          src={src}
          alt={alt}
          className={className || "w-full h-auto"}
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
          <ZoomIn className="w-10 h-10 text-white" />
        </div>
      </div>
      
      {isViewerOpen && (
        <ImageViewer 
          src={src} 
          alt={alt} 
          onClose={closeViewer} 
        />
      )}
    </>
  );
};

export default ZoomableImage;