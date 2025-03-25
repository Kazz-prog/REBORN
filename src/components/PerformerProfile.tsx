import React from 'react';
import { Instagram, Twitter, Youtube, Globe, ExternalLink } from 'lucide-react';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center text-gray-600 hover:text-[#e09f5f] transition-colors mr-3"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

interface PerformerProfileProps {
  name: string;
  image: string;
  role: string;
  bio: string;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    website?: string;
  };
}

const PerformerProfile: React.FC<PerformerProfileProps> = ({ 
  name, 
  image, 
  role, 
  bio, 
  socialLinks 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="w-full md:w-1/4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto rounded-lg object-cover aspect-square"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-[#e09f5f] font-medium mb-2">{role}</p>
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="flex items-center">
          {socialLinks.instagram && (
            <SocialLink 
              icon={<Instagram className="w-5 h-5 mr-1" />} 
              href={socialLinks.instagram}
              label={`${name} Instagram`}
            />
          )}
          {socialLinks.twitter && (
            <SocialLink 
              icon={<Twitter className="w-5 h-5 mr-1" />} 
              href={socialLinks.twitter}
              label={`${name} Twitter`}
            />
          )}
          {socialLinks.youtube && (
            <SocialLink 
              icon={<Youtube className="w-5 h-5 mr-1" />} 
              href={socialLinks.youtube}
              label={`${name} YouTube`}
            />
          )}
          {socialLinks.website && (
            <SocialLink 
              icon={<Globe className="w-5 h-5 mr-1" />} 
              href={socialLinks.website}
              label={`${name} Website`}
            />
          )}
          <a 
            href="#" 
            className="ml-auto text-sm text-[#e09f5f] hover:underline flex items-center"
          >
            View full profile <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PerformerProfile;