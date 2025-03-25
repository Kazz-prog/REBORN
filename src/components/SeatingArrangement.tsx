import React, { useState } from 'react';

interface SeatingSectionProps {
  id: string;
  name: string;
  color: string;
  availability: 'high' | 'medium' | 'low' | 'sold-out';
}

const SeatingSection: React.FC<SeatingSectionProps> = ({ id, name, color, availability }) => {
  const getAvailabilityText = () => {
    switch (availability) {
      case 'high':
        return 'Many seats available';
      case 'medium':
        return 'Limited seats available';
      case 'low':
        return 'Very few seats available';
      case 'sold-out':
        return 'Sold out';
      default:
        return '';
    }
  };

  const getAvailabilityColor = () => {
    switch (availability) {
      case 'high':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-orange-500';
      case 'sold-out':
        return 'bg-red-500';
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center mb-2">
      <div 
        className={`w-6 h-6 rounded-sm mr-2`}
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex-1">
        <div className="flex justify-between">
          <span className="font-medium">{name}</span>
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${getAvailabilityColor()} mr-1`}></div>
            <span className="text-sm text-gray-600">{getAvailabilityText()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeatingArrangement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'list'>('map');

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'map' 
              ? 'text-[#e09f5f] border-b-2 border-[#e09f5f]' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('map')}
        >
          Seating Map
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'list' 
              ? 'text-[#e09f5f] border-b-2 border-[#e09f5f]' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('list')}
        >
          Section List
        </button>
      </div>

      {activeTab === 'map' ? (
        <div className="relative w-full h-[300px] border border-gray-200 rounded-lg overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-[90%] h-8 bg-gray-300 mx-auto mb-4"></div>
              <div className="flex justify-center space-x-2 mb-6">
                <div className="w-20 h-20 bg-[#e09f5f]/80"></div>
                <div className="w-20 h-20 bg-[#e09f5f]"></div>
                <div className="w-20 h-20 bg-[#e09f5f]/80"></div>
              </div>
              
              <div className="flex justify-around">
                <div className="w-[30%]">
                  <div className="h-16 bg-[#6b7280]/60 mb-2"></div>
                  <div className="h-16 bg-[#6b7280]/60"></div>
                </div>
                <div className="w-[30%]">
                  <div className="h-16 bg-[#6b7280]/80 mb-2"></div>
                  <div className="h-16 bg-[#6b7280]/80"></div>
                </div>
                <div className="w-[30%]">
                  <div className="h-16 bg-[#6b7280]/60 mb-2"></div>
                  <div className="h-16 bg-[#6b7280]/60"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section Indicators */}
          <div className="absolute top-[15%] left-[15%] w-12 h-12 bg-[#9333ea]/70 rounded-full flex items-center justify-center text-white font-bold">A</div>
          <div className="absolute top-[15%] right-[15%] w-12 h-12 bg-[#2563eb]/70 rounded-full flex items-center justify-center text-white font-bold">B</div>
          <div className="absolute bottom-[15%] left-[15%] w-12 h-12 bg-[#059669]/70 rounded-full flex items-center justify-center text-white font-bold">C</div>
          <div className="absolute bottom-[15%] right-[15%] w-12 h-12 bg-[#d97706]/70 rounded-full flex items-center justify-center text-white font-bold">D</div>
          
          <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded text-xs">
            <p>Click on sections for details</p>
          </div>
        </div>
      ) : (
        <div>
          <SeatingSection 
            id="vip" 
            name="VIP Section (Front Row)" 
            color="#9333ea" 
            availability="low"
          />
          <SeatingSection 
            id="premium" 
            name="Premium Section" 
            color="#2563eb" 
            availability="medium"
          />
          <SeatingSection 
            id="standard" 
            name="Standard Section" 
            color="#059669" 
            availability="high"
          />
          <SeatingSection 
            id="general" 
            name="General Admission" 
            color="#d97706" 
            availability="high"
          />
          <SeatingSection 
            id="standing" 
            name="Standing Area (Back)" 
            color="#6b7280" 
            availability="high"
          />
          
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Seating is assigned on a first-come, first-served basis within each section. 
              Early arrival is recommended for better seating options.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatingArrangement;