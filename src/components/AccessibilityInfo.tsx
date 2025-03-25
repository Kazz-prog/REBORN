import React from 'react';
import { Armchair as Wheelchair, EarIcon, Eye, Baby, Languages } from 'lucide-react';

interface AccessibilityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AccessibilityFeature: React.FC<AccessibilityFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="w-10 h-10 rounded-full bg-[#e09f5f]/10 flex items-center justify-center mr-3 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AccessibilityInfo: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <AccessibilityFeature 
          icon={<Wheelchair className="w-5 h-5 text-[#e09f5f]" />}
          title="Wheelchair Accessibility"
          description="The venue is fully wheelchair accessible with ramps and elevators. Designated wheelchair seating areas are available in all sections."
        />
        
        <AccessibilityFeature 
          icon={<EarIcon className="w-5 h-5 text-[#e09f5f]" />}
          title="Hearing Assistance"
          description="Assistive listening devices are available at the information desk. Sign language interpreters will be present for main stage performances."
        />
        
        <AccessibilityFeature 
          icon={<Eye className="w-5 h-5 text-[#e09f5f]" />}
          title="Visual Accessibility"
          description="Large print programs are available upon request. Guide dogs are permitted throughout the venue."
        />
        
        <AccessibilityFeature 
          icon={<Baby className="w-5 h-5 text-[#e09f5f]" />}
          title="Family Facilities"
          description="Baby changing facilities are available in all restrooms. A quiet room is available for those who need a sensory break."
        />
        
        <AccessibilityFeature 
          icon={<Languages className="w-5 h-5 text-[#e09f5f]" />}
          title="Language Support"
          description="Event staff speak English, Japanese, and Indonesian. Translation services are available at the information desk."
        />
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Request Special Accommodations</h3>
        <p className="text-sm text-gray-600 mb-3">
          If you require any specific accommodations not listed here, please contact our accessibility team 
          at least 72 hours before the event.
        </p>
        <div className="flex items-center">
          <a 
            href="mailto:accessibility@ichiichi.com" 
            className="text-[#e09f5f] hover:underline mr-4"
          >
            accessibility@ichiichi.com
          </a>
          <a 
            href="tel:+6281234567890" 
            className="text-[#e09f5f] hover:underline"
          >
            +62 812-3456-7890
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityInfo;