import React from 'react';
import CollapsibleSection from './CollapsibleSection';

const FAQSection: React.FC = () => {
  return (
    <div>
      <CollapsibleSection title="What time should I arrive at the event?" defaultOpen={true}>
        <p className="text-gray-700">
          We recommend arriving at least 30 minutes before the event starts to allow time for parking, 
          check-in, and finding your seat. For VIP ticket holders, early entry begins at 13:00, 
          one hour before the general opening time.
        </p>
      </CollapsibleSection>
      
      <CollapsibleSection title="Is there a dress code?">
        <p className="text-gray-700">
          There is no strict dress code, but many attendees enjoy wearing Japanese-inspired outfits 
          or cosplay. Comfortable clothing is recommended as you'll be attending various activities 
          throughout the day. Please ensure all costumes are family-friendly.
        </p>
      </CollapsibleSection>
      
      <CollapsibleSection title="Can I bring my own food and drinks?">
        <p className="text-gray-700">
          Outside food and drinks are not permitted inside the venue. We offer a variety of food 
          options including Japanese cuisine and accommodations for different dietary needs. 
          Sealed water bottles (up to 500ml) are allowed.
        </p>
      </CollapsibleSection>
      
      <CollapsibleSection title="Is photography allowed during performances?">
        <p className="text-gray-700">
          Photography without flash is permitted during most performances. However, some guest stars 
          may have specific restrictions which will be announced before their performance. Professional 
          photography equipment (detachable lenses over 200mm) requires prior approval.
        </p>
      </CollapsibleSection>
      
      <CollapsibleSection title="Are there meet and greet opportunities with performers?">
        <p className="text-gray-700">
          Yes, VIP ticket holders will have access to a special meet and greet session with select 
          performers after their shows. Additional meet and greet tickets may be available for purchase 
          at the information desk on the day of the event, subject to availability.
        </p>
      </CollapsibleSection>
      
      <CollapsibleSection title="What items are prohibited at the event?">
        <p className="text-gray-700">
          Prohibited items include:
          <ul className="list-disc pl-5 mt-2">
            <li>Weapons or weapon replicas</li>
            <li>Illegal substances</li>
            <li>Outside food and beverages (except sealed water)</li>
            <li>Selfie sticks and tripods</li>
            <li>Large bags or backpacks (over 40x30cm)</li>
            <li>Pets (service animals are permitted)</li>
          </ul>
        </p>
      </CollapsibleSection>
      
      <CollapsibleSection title="Is the venue accessible for people with disabilities?">
        <p className="text-gray-700">
          Yes, the venue is wheelchair accessible with designated seating areas. We offer assistance 
          for attendees with disabilities. Please contact us in advance at accessibility@ichiichi.com 
          to arrange any specific accommodations you may need.
        </p>
      </CollapsibleSection>
      
      <CollapsibleSection title="What happens if it rains?">
        <p className="text-gray-700">
          Ichi-Ichi Reborn will proceed rain or shine as most activities are held indoors. In case of 
          severe weather conditions, outdoor activities may be relocated or rescheduled. Updates will 
          be posted on our website and social media channels.
        </p>
      </CollapsibleSection>
      
      <CollapsibleSection title="Can I get a refund if I can't attend?">
        <p className="text-gray-700">
          Tickets are non-refundable. However, you may transfer your ticket to someone else by 
          contacting our support team at tickets@ichiichi.com at least 48 hours before the event. 
          In case of event cancellation, full refunds will be processed automatically.
        </p>
      </CollapsibleSection>
    </div>
  );
};

export default FAQSection;