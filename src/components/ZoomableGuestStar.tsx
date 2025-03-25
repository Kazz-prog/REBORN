import React, { useState } from 'react';
import { Star, ZoomIn } from 'lucide-react';
import HoverZoomImage from './HoverZoomImage';
import ImageViewer from './ImageViewer';

interface ZoomableGuestStarProps {
  src: string;
  alt: string;
  type: string;
  name: string;
  description?: string;
}

const ZoomableGuestStar: React.FC<ZoomableGuestStarProps> = ({ 
  src, 
  alt, 
  type, 
  name, 
  description 
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openViewer = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className="relative group">
      <div className="rounded-xl overflow-hidden">
        <HoverZoomImage 
          src={src}
          alt={alt}
          className="w-full h-72 object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all rounded-xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 p-6 z-10">
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400 mr-2" />
          <span className="text-yellow-400 font-semibold">{type}</span>
        </div>
        <h3 className="text-white text-xl font-semibold">{name}</h3>
        {description && <p className="text-white/80">{description}</p>}
      </div>
      <div className="absolute top-4 right-4">
        <button 
          onClick={openViewer} 
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </button>
      </div>
      
      {isViewerOpen && (
        <ImageViewer 
          src={src} 
          alt={alt} 
          onClose={closeViewer} 
        />
      )}
    </div>
  );
};

export default ZoomableGuestStar;