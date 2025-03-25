import React from 'react';
import { AlertTriangle, ChevronFirst as FirstAid, Phone, MapPin, Shield } from 'lucide-react';

const EmergencyInfo: React.FC = () => {
  return (
    <div>
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-red-700 mb-1">Emergency Procedures</h3>
            <p className="text-sm text-gray-700">
              In case of emergency, please follow staff instructions and proceed to the nearest exit. 
              Emergency exits are clearly marked throughout the venue.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
              <FirstAid className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-medium mb-1">First Aid Stations</h3>
              <p className="text-sm text-gray-600 mb-2">
                First aid stations are located at:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                <li>Main entrance lobby</li>
                <li>Near the food court</li>
                <li>Backstage area</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3 flex-shrink-0">
              <Phone className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Emergency Contacts</h3>
              <p className="text-sm text-gray-600 mb-2">
                Important emergency numbers:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Event Security:</strong> +62 812-555-7890</li>
                <li><strong>Medical Emergency:</strong> +62 812-555-1234</li>
                <li><strong>Local Police:</strong> 110</li>
                <li><strong>Ambulance:</strong> 118</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3 flex-shrink-0">
              <MapPin className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Meeting Points</h3>
              <p className="text-sm text-gray-600 mb-2">
                In case you get separated from your group, designated meeting points are:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                <li>Information desk at main entrance</li>
                <li>Large cherry blossom decoration near food court</li>
                <li>Event merchandise booth</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-3 flex-shrink-0">
              <Shield className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Safety Guidelines</h3>
              <p className="text-sm text-gray-600 mb-2">
                For your safety:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5">
                <li>Keep your belongings with you at all times</li>
                <li>Report suspicious activities to security personnel</li>
                <li>Stay hydrated and take breaks when needed</li>
                <li>Follow all posted safety instructions</li>
                <li>Do not block emergency exits or pathways</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyInfo;