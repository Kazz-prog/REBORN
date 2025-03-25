import React from 'react';
import { FileText, Map, Ticket, Calendar, Download } from 'lucide-react';

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  fileSize: string;
  fileType: string;
  downloadUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  icon, 
  title, 
  description, 
  fileSize, 
  fileType, 
  downloadUrl 
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start">
      <div className="w-12 h-12 rounded-full bg-[#e09f5f]/10 flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {fileSize} • {fileType}
          </div>
          <a 
            href={downloadUrl}
            className="flex items-center text-[#e09f5f] hover:text-[#d08f4f] transition-colors text-sm"
            download
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

const DownloadableResources: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ResourceCard 
        icon={<FileText className="w-6 h-6 text-[#e09f5f]" />}
        title="Event Guide"
        description="Complete guide with schedule, performer information, and venue details"
        fileSize="2.4 MB"
        fileType="PDF"
        downloadUrl="/downloads/ichi-ichi-event-guide.pdf"
      />
      
      <ResourceCard 
        icon={<Map className="w-6 h-6 text-[#e09f5f]" />}
        title="Venue Map"
        description="Detailed map of the venue with all facilities, stages, and amenities marked"
        fileSize="1.8 MB"
        fileType="PDF"
        downloadUrl="/downloads/ichi-ichi-venue-map.pdf"
      />
      
      <ResourceCard 
        icon={<Ticket className="w-6 h-6 text-[#e09f5f]" />}
        title="Digital Ticket"
        description="Your digital ticket with QR code for quick entry (requires login)"
        fileSize="0.5 MB"
        fileType="PDF"
        downloadUrl="/downloads/ichi-ichi-digital-ticket.pdf"
      />
      
      <ResourceCard 
        icon={<Calendar className="w-6 h-6 text-[#e09f5f]" />}
        title="Program Schedule"
        description="Detailed timeline of all performances, workshops, and activities"
        fileSize="1.2 MB"
        fileType="PDF"
        downloadUrl="/downloads/ichi-ichi-program-schedule.pdf"
      />
    </div>
  );
};

export default DownloadableResources;