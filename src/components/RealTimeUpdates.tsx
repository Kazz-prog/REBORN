import React, { useState, useEffect } from 'react';
import { CloudSun, Car, Clock, Ticket, RefreshCw } from 'lucide-react';

interface UpdateCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  lastUpdated: string;
  className?: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({ icon, title, value, lastUpdated, className = "" }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm border border-[#e09f5f]/10 ${className}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#e09f5f]/10 flex items-center justify-center mr-2">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <button className="text-gray-400 hover:text-[#e09f5f] transition-colors">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>
      <div className="text-xl font-semibold mb-1">{value}</div>
      <div className="text-xs text-gray-500">Last updated: {lastUpdated}</div>
    </div>
  );
};

const RealTimeUpdates: React.FC = () => {
  // In a real application, these would be fetched from an API
  const [weather, setWeather] = useState("Sunny, 28°C");
  const [parking, setParking] = useState("75% Full (P1), 40% Full (P2)");
  const [schedule, setSchedule] = useState("On time");
  const [tickets, setTickets] = useState("Early Bird: Sold Out, Presale 1: 85% Sold");
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // This would be replaced with actual API calls
      const now = new Date();
      const hours = now.getHours();
      
      // Simulate changing weather based on time of day
      if (hours < 10) {
        setWeather("Partly Cloudy, 24°C");
      } else if (hours < 14) {
        setWeather("Sunny, 28°C");
      } else if (hours < 18) {
        setWeather("Sunny, 30°C");
      } else {
        setWeather("Clear, 26°C");
      }
      
      // Simulate changing parking availability
      const p1Percentage = Math.min(95, 50 + Math.floor(Math.random() * 30));
      const p2Percentage = Math.min(90, 30 + Math.floor(Math.random() * 30));
      setParking(`${p1Percentage}% Full (P1), ${p2Percentage}% Full (P2)`);
      
      // Simulate ticket sales progress
      const presale1Percentage = Math.min(99, 85 + Math.floor(Math.random() * 10));
      setTickets(`Early Bird: Sold Out, Presale 1: ${presale1Percentage}% Sold`);
      
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <UpdateCard 
        icon={<CloudSun className="w-5 h-5 text-[#e09f5f]" />}
        title="Weather Forecast"
        value={weather}
        lastUpdated="5 minutes ago"
      />
      <UpdateCard 
        icon={<Car className="w-5 h-5 text-[#e09f5f]" />}
        title="Parking Availability"
        value={parking}
        lastUpdated="2 minutes ago"
      />
      <UpdateCard 
        icon={<Clock className="w-5 h-5 text-[#e09f5f]" />}
        title="Schedule Status"
        value={schedule}
        lastUpdated="10 minutes ago"
      />
      <UpdateCard 
        icon={<Ticket className="w-5 h-5 text-[#e09f5f]" />}
        title="Ticket Availability"
        value={tickets}
        lastUpdated="1 minute ago"
      />
    </div>
  );
};

export default RealTimeUpdates;