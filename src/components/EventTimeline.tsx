import React from 'react';
import { Clock } from 'lucide-react';

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ time, title, description }) => {
  return (
    <div className="flex mb-8 relative">
      <div className="flex flex-col items-center mr-4">
        <div className="w-12 h-12 bg-[#e09f5f] rounded-full flex items-center justify-center text-white">
          <Clock className="w-6 h-6" />
        </div>
        <div className="h-full w-0.5 bg-[#e09f5f]/30 absolute top-12 bottom-0 left-6 -z-10"></div>
      </div>
      <div className="flex-1">
        <div className="bg-white p-4 rounded-lg shadow-md border border-[#e09f5f]/20">
          <span className="text-sm font-medium text-[#e09f5f] block mb-1">{time}</span>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const EventTimeline: React.FC = () => {
  return (
    <div className="py-6">
      <TimelineItem 
        time="14:00 - 15:00" 
        title="Opening Ceremony" 
        description="Welcome speech and traditional Japanese dance performance to kick off the event."
      />
      <TimelineItem 
        time="15:00 - 16:30" 
        title="Kohisekai Performance" 
        description="Live performance by the popular idol group featuring their latest hits."
      />
      <TimelineItem 
        time="16:30 - 17:30" 
        title="Japanese Cultural Workshop" 
        description="Interactive sessions on origami, calligraphy, and traditional tea ceremony."
      />
      <TimelineItem 
        time="17:30 - 18:30" 
        title="Gochikara Performance" 
        description="Energetic show by the rising idol group with audience participation."
      />
      <TimelineItem 
        time="18:30 - 19:30" 
        title="Dinner Break & Food Festival" 
        description="Explore authentic Japanese cuisine from various food stalls."
      />
      <TimelineItem 
        time="19:30 - 20:30" 
        title="Kobo Kanaeru Special Appearance" 
        description="Live calligraphy demonstration and interactive session with fans."
      />
      <TimelineItem 
        time="20:30 - 21:10" 
        title="Closing Performance & Fireworks" 
        description="Grand finale with all performers and spectacular fireworks display."
      />
    </div>
  );
};

export default EventTimeline;