import React from 'react';

interface HoverZoomImageProps {
  src: string;
  alt: string;
  className?: string;
}

const HoverZoomImage: React.FC<HoverZoomImageProps> = ({ src, alt, className }) => {
  return (
    <div className="overflow-hidden rounded-xl">
      <img 
        src={src}
        alt={alt}
        className={`${className || "w-full h-auto"} transition-transform duration-300 ease-in-out hover:scale-110`}
      />
    </div>
  );
};

export default HoverZoomImage;