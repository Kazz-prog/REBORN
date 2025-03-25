import React, { useState } from 'react';
import { Calendar, Map, Users, Utensils, Clock, CloudSun, HelpCircle, FileText, Instagram, Armchair as Wheelchair, AlertTriangle } from 'lucide-react';
import CollapsibleSection from './CollapsibleSection';
import EventTimeline from './EventTimeline';
import VenueMap from './VenueMap';
import PerformerProfile from './PerformerProfile';
import MenuOptions from './MenuOptions';
import SeatingArrangement from './SeatingArrangement';
import RealTimeUpdates from './RealTimeUpdates';
import FAQSection from './FAQSection';
import DownloadableResources from './DownloadableResources';
import SocialFeed from './SocialFeed';
import AccessibilityInfo from './AccessibilityInfo';
import EmergencyInfo from './EmergencyInfo';

interface TabProps {
  icon: React.ReactNode;
  label: string;
  id: string;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center p-3 ${
        active 
          ? 'text-[#e09f5f] border-b-2 border-[#e09f5f]' 
          : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

const EventDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'schedule':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
            <p className="text-gray-600 mb-6">
              Below is the detailed timeline of activities for Ichi-Ichi Reborn. 
              All times are in local time (GMT+7).
            </p>
            <EventTimeline />
          </div>
        );
      case 'location':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Venue & Location</h2>
            <p className="text-gray-600 mb-6">
              Ichi-Ichi Reborn will be held at State Senior High School 11 Yogyakarta. 
              The map below shows the venue layout, parking areas, and nearby amenities.
            </p>
            <VenueMap />
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Getting There</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2">By Public Transport</h4>
                  <p className="text-sm text-gray-600">
                    Bus routes 2A, 3B, and 5C stop directly in front of the venue. 
                    The nearest train station is Yogyakarta Station, 2.5km away.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-medium mb-2">By Car</h4>
                  <p className="text-sm text-gray-600">
                    Parking is available on-site. Use the address: Jl. Kaliurang KM 12, 
                    Yogyakarta for navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'performers':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Guest Stars & Performers</h2>
            <p className="text-gray-600 mb-6">
              Meet our amazing lineup of performers who will make Ichi-Ichi Reborn an unforgettable experience.
            </p>
            <PerformerProfile 
              name="Kohisekai" 
              image="https://th.bing.com/th/id/OIP.RMWcqxJQGiRxqB8qruANlAHaHa?rs=1&pid=ImgDetMain" 
              role="Idol Group" 
              bio="Kohisekai is a rising idol group known for their energetic performances and catchy songs. They've been making waves in the Japanese idol scene with their unique blend of traditional and modern elements."
              socialLinks={{
                instagram: "https://instagram.com/kohisekai",
                twitter: "https://twitter.com/kohisekai",
                youtube: "https://youtube.com/kohisekai"
              }}
            />
            <PerformerProfile 
              name="Gochikara" 
              image="https://assets.promediateknologi.id/crop/0x0:0x0/750x0/webp/photo/2023/07/05/346286579_791147965968495_1885523074990498571_n-1878331579.jpg" 
              role="Idol Group" 
              bio="Gochikara brings their unique style and powerful performances to Ichi-Ichi Reborn. Known for their interactive shows and fan engagement, they're sure to create an unforgettable experience."
              socialLinks={{
                instagram: "https://instagram.com/gochikara",
                twitter: "https://twitter.com/gochikara",
                youtube: "https://youtube.com/gochikara"
              }}
            />
            <PerformerProfile 
              name="Kobo Kanaeru" 
              image="https://th.bing.com/th/id/OIP.rFH7WmxXbiM-8HTK5LIDZQHaHa?rs=1&pid=ImgDetMain" 
              role="Vtuber" 
              bio="Kobo Kanaeru is a popular VTuber known for her entertaining streams and talented calligraphy. At Ichi-Ichi Reborn, she'll be performing live calligraphy demonstrations and interacting with fans."
              socialLinks={{
                instagram: "https://instagram.com/kobokanaeru",
                twitter: "https://twitter.com/kobokanaeru",
                youtube: "https://youtube.com/kobokanaeru"
              }}
            />
          </div>
        );
      case 'food':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Food & Refreshments</h2>
            <p className="text-gray-600 mb-6">
              Explore the variety of Japanese cuisine and refreshments available at Ichi-Ichi Reborn. 
              We offer options for various dietary preferences.
            </p>
            <MenuOptions />
          </div>
        );
      case 'seating':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Seating & Floor Plan</h2>
            <p className="text-gray-600 mb-6">
              View the seating arrangement and floor plan to help you navigate the venue 
              and find the best spots to enjoy the performances.
            </p>
            <SeatingArrangement />
          </div>
        );
      case 'updates':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Real-Time Updates</h2>
            <p className="text-gray-600 mb-6">
              Stay informed with the latest updates about weather, parking, schedule changes, 
              and ticket availability for Ichi-Ichi Reborn.
            </p>
            <RealTimeUpdates />
          </div>
        );
      case 'faq':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-6">
              Find answers to common questions about Ichi-Ichi Reborn, from ticket information 
              to venue policies and performer details.
            </p>
            <FAQSection />
          </div>
        );
      case 'downloads':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Downloadable Resources</h2>
            <p className="text-gray-600 mb-6">
              Access and download useful resources for Ichi-Ichi Reborn, including event guides, 
              maps, digital tickets, and program schedules.
            </p>
            <DownloadableResources />
          </div>
        );
      case 'social':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Social Media Feed</h2>
            <p className="text-gray-600 mb-6">
              See what people are saying about Ichi-Ichi Reborn on social media. Share your own 
              experience using #IchiIchiReborn to be featured!
            </p>
            <SocialFeed />
          </div>
        );
      case 'accessibility':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Accessibility Information</h2>
            <p className="text-gray-600 mb-6">
              Learn about the accessibility features and accommodations available at Ichi-Ichi Reborn 
              to ensure everyone can enjoy the event.
            </p>
            <AccessibilityInfo />
          </div>
        );
      case 'emergency':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Emergency Procedures</h2>
            <p className="text-gray-600 mb-6">
              Important information about emergency procedures, first aid locations, and safety 
              guidelines for Ichi-Ichi Reborn.
            </p>
            <EmergencyInfo />
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-[#faf7f2] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Event Details</h1>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Everything you need to know about Ichi-Ichi Reborn, from schedules and maps to food options and emergency information.
        </p>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <div className="flex min-w-max border-b">
              <Tab 
                icon={<Clock className="w-5 h-5" />} 
                label="Schedule" 
                id="schedule" 
                active={activeTab === 'schedule'} 
                onClick={() => setActiveTab('schedule')}
              />
              <Tab 
                icon={<Map className="w-5 h-5" />} 
                label="Location" 
                id="location" 
                active={activeTab === 'location'} 
                onClick={() => setActiveTab('location')}
              />
              <Tab 
                icon={<Users className="w-5 h-5" />} 
                label="Performers" 
                id="performers" 
                active={activeTab === 'performers'} 
                onClick={() => setActiveTab('performers')}
              />
              <Tab 
                icon={<Utensils className="w-5 h-5" />} 
                label="Food" 
                id="food" 
                active={activeTab === 'food'} 
                onClick={() => setActiveTab('food')}
              />
              <Tab 
                icon={<Calendar className="w-5 h-5" />} 
                label="Seating" 
                id="seating" 
                active={activeTab === 'seating'} 
                onClick={() => setActiveTab('seating')}
              />
              <Tab 
                icon={<CloudSun className="w-5 h-5" />} 
                label="Updates" 
                id="updates" 
                active={activeTab === 'updates'} 
                onClick={() => setActiveTab('updates')}
              />
              <Tab 
                icon={<HelpCircle className="w-5 h-5" />} 
                label="FAQ" 
                id="faq" 
                active={activeTab === 'faq'} 
                onClick={() => setActiveTab('faq')}
              />
              <Tab 
                icon={<FileText className="w-5 h-5" />} 
                label="Downloads" 
                id="downloads" 
                active={activeTab === 'downloads'} 
                onClick={() => setActiveTab('downloads')}
              />
              <Tab 
                icon={<Instagram className="w-5 h-5" />} 
                label="Social" 
                id="social" 
                active={activeTab === 'social'} 
                onClick={() => setActiveTab('social')}
              />
              <Tab 
                icon={<Wheelchair className="w-5 h-5" />} 
                label="Accessibility" 
                id="accessibility" 
                active={activeTab === 'accessibility'} 
                onClick={() => setActiveTab('accessibility')}
              />
              <Tab 
                icon={<AlertTriangle className="w-5 h-5" />} 
                label="Emergency" 
                id="emergency" 
                active={activeTab === 'emergency'} 
                onClick={() => setActiveTab('emergency')}
              />
            </div>
          </div>
          
          <div className="p-6">
            {renderTabContent()}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CollapsibleSection title="Quick Information" defaultOpen={true}>
            <div className="space-y-3">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-[#e09f5f] mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Date & Time</h4>
                  <p className="text-sm text-gray-600">June 15, 2025, 14:00 - 21:10</p>
                </div>
              </div>
              <div className="flex items-start">
                <Map className="w-5 h-5 text-[#e09f5f] mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-gray-600">State Senior High School 11 Yogyakarta</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-[#e09f5f] mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Capacity</h4>
                  <p className="text-sm text-gray-600">2000 Attendees</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>
          
          <CollapsibleSection title="Contact Information">
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                For any inquiries or assistance, please contact us:
              </p>
              <div className="flex items-center">
                <a href="mailto:info@ichiichi.com" className="text-[#e09f5f] hover:underline">info@ichiichi.com</a>
              </div>
              <div className="flex items-center">
                <a href="tel:+6281234567890" className="text-[#e09f5f] hover:underline">+62 812-3456-7890</a>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Customer service hours: 9:00 - 17:00, Monday to Friday
              </p>
            </div>
          </CollapsibleSection>
          
          <CollapsibleSection title="Important Notices">
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                <strong>COVID-19 Protocols:</strong> Masks are recommended but not required. 
                Hand sanitizing stations are available throughout the venue.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Photography Policy:</strong> Non-flash photography is allowed. 
                Professional equipment requires prior approval.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Re-entry Policy:</strong> Hand stamps will be provided for re-entry. 
                Please keep your ticket throughout the event.
              </p>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;