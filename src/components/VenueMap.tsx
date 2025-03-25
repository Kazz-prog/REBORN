import React, { useState } from 'react';
import { MapPin, Car, Coffee, Utensils, Hotel, Info } from 'lucide-react';

interface MapMarkerProps {
  icon: React.ReactNode;
  x: number;
  y: number;
  label: string;
  color: string;
}

const MapMarker: React.FC<MapMarkerProps> = ({ icon, x, y, label, color }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div 
      className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color} shadow-lg`}>
        {icon}
      </div>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm whitespace-nowrap z-10">
          {label}
        </div>
      )}
    </div>
  );
};

const VenueMap: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden border-2 border-[#e09f5f]/20 shadow-lg">
      <img 
        src="https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&q=80&w=2070" 
        alt="Map of venue location" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Main Venue */}
      <MapMarker 
        icon={<MapPin className="w-6 h-6 text-white" />} 
        x={50} 
        y={50} 
        label="Main Venue - State Senior High School 11" 
        color="bg-red-500"
      />
      
      {/* Parking Areas */}
      <MapMarker 
        icon={<Car className="w-5 h-5 text-white" />} 
        x={35} 
        y={70} 
        label="Main Parking Area (P1)" 
        color="bg-blue-500"
      />
      <MapMarker 
        icon={<Car className="w-5 h-5 text-white" />} 
        x={65} 
        y={30} 
        label="Overflow Parking (P2)" 
        color="bg-blue-500"
      />
      
      {/* Nearby Amenities */}
      <MapMarker 
        icon={<Coffee className="w-5 h-5 text-white" />} 
        x={70} 
        y={60} 
        label="Café & Refreshments" 
        color="bg-amber-600"
      />
      <MapMarker 
        icon={<Utensils className="w-5 h-5 text-white" />} 
        x={25} 
        y={40} 
        label="Food Court" 
        color="bg-green-600"
      />
      <MapMarker 
        icon={<Hotel className="w-5 h-5 text-white" />} 
        x={80} 
        y={25} 
        label="Nearby Accommodations" 
        color="bg-purple-600"
      />
      <MapMarker 
        icon={<Info className="w-5 h-5 text-white" />} 
        x={40} 
        y={20} 
        label="Information Desk" 
        color="bg-gray-700"
      />
      
      <div className="absolute bottom-4 right-4 bg-white/80 p-2 rounded-lg text-xs">
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
          <span>Main Venue</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
          <span>Parking</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-amber-600 mr-1"></div>
          <span>Refreshments</span>
        </div>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full bg-green-600 mr-1"></div>
          <span>Food</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-600 mr-1"></div>
          <span>Accommodations</span>
        </div>
      </div>
    </div>
  );
};

export default VenueMap;