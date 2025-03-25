import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

interface CollapsibleSectionProps {
  title: string;
  initiallyExpanded?: boolean;
  children: React.ReactNode;
  id: string;
  interactive?: boolean;
  tooltipText?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  initiallyExpanded = true,
  children,
  id,
  interactive = false,
  tooltipText
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
  const [isPressed, setIsPressed] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseDown = () => {
    if (interactive) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    if (interactive) {
      setIsPressed(false);
    }
  };

  return (
    <div className="w-full relative">
      <button
        onClick={toggleExpanded}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsPressed(false)}
        className={`w-full flex items-center justify-between px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e09f5f] focus:ring-opacity-50 ${
          interactive 
            ? `bg-gradient-to-r from-[#e09f5f] to-[#d08f4f] hover:from-[#d08f4f] hover:to-[#c07f3f] text-white 
               transition-all duration-300 transform hover:scale-105 
               ${isPressed ? 'scale-95' : ''} 
               shadow-lg hover:shadow-[#e09f5f]/30 relative overflow-hidden`
            : 'bg-[#e09f5f] hover:bg-[#d08f4f] text-white transition-colors duration-300'
        }`}
        aria-expanded={isExpanded}
        aria-controls={id}
        aria-label={`${isExpanded ? 'Hide' : 'Show'} ${title}`}
      >
        {interactive && (
          <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        )}
        
        <h2 className="text-2xl md:text-3xl font-bold flex items-center">
          {title}
          {interactive && tooltipText && (
            <div className="group relative ml-2">
              <Info className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              <div className="absolute left-0 bottom-full mb-2 w-48 p-2 bg-white text-gray-800 text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                {tooltipText}
                <div className="absolute top-full left-3 -mt-1 w-2 h-2 bg-white transform rotate-45"></div>
              </div>
            </div>
          )}
        </h2>
        
        <span className={`ml-2 transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`}>
          {isExpanded ? (
            <ChevronUp className={`w-6 h-6 ${interactive ? 'animate-pulse' : ''}`} />
          ) : (
            <ChevronDown className={`w-6 h-6 ${interactive ? 'animate-pulse' : ''}`} />
          )}
        </span>
      </button>
      
      <div 
        id={id}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isExpanded}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleSection;