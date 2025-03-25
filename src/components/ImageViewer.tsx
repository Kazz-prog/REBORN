import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ src, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(0.5, scale + delta), 2);
    setScale(newScale);
  };

  // Handle zoom in button
  const handleZoomIn = () => {
    setScale(Math.min(scale + 0.1, 2));
  };

  // Handle zoom out button
  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.1, 0.5));
  };

  // Handle mouse down for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // Handle mouse move for dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      // Calculate boundaries to keep image centered
      const containerWidth = containerRef.current?.clientWidth || 0;
      const containerHeight = containerRef.current?.clientHeight || 0;
      const maxX = (containerWidth * (scale - 1)) / 2;
      const maxY = (containerHeight * (scale - 1)) / 2;
      
      setPosition({
        x: Math.min(Math.max(newX, -maxX), maxX),
        y: Math.min(Math.max(newY, -maxY), maxY)
      });
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Reset position when scale changes to 1
  useEffect(() => {
    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [scale]);

  // Add event listeners for mouse up outside the component
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  // Calculate zoom percentage
  const zoomPercentage = Math.round(scale * 100);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="absolute top-4 right-4 flex space-x-2">
        <button 
          onClick={handleZoomOut} 
          disabled={scale <= 0.5}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors disabled:opacity-50"
        >
          <ZoomOut className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={handleZoomIn} 
          disabled={scale >= 2}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors disabled:opacity-50"
        >
          <ZoomIn className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={onClose}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>
      
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm"
      >
        {zoomPercentage}%
      </div>
      
      <div 
        ref={containerRef}
        className="relative w-[90vw] h-[80vh] overflow-hidden cursor-move"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img
          src={src}
          alt={alt}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out"
          style={{
            transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`,
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ImageViewer;