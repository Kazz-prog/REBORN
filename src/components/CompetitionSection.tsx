import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Users, Star, Ticket, Phone, Mail, Instagram, ChevronDown, Info, Heart, Award } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ZoomableGuestStar = ({ src, alt, name, type, description }: { 
  src: string, 
  alt: string, 
  name: string, 
  type: string, 
  description?: string 
}) => (
  <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
      <h3 className="text-white text-xl font-bold">{name}</h3>
      <p className="text-[#e09f5f] text-sm font-medium">{type}</p>
      {description && <p className="text-white/80 text-sm mt-2">{description}</p>}
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <a href="#home" className="text-[#e09f5f] font-bold text-xl">ICHI-ICHI</a>
      </div>
      <div className="flex space-x-6">
        <a href="#about" className="text-gray-700 hover:text-[#e09f5f] transition-colors">About</a>
        <a href="#details" className="text-gray-700 hover:text-[#e09f5f] transition-colors">Details</a>
        <a href="#competitions" className="text-gray-700 hover:text-[#e09f5f] transition-colors">Competitions</a>
        <a href="#tickets" className="text-gray-700 hover:text-[#e09f5f] transition-colors">Tickets</a>
      </div>
    </div>
  </nav>
);

const competitions = [
  {
    id: 'comp-1',
    title: 'Cosplay Contest',
    description: 'Showcase your best Japanese character cosplay and win amazing prizes!',
    thumbnail: 'https://fictionhorizon.com/wp-content/uploads/2022/03/Mikasa_Ackermann_28Anime29_character_image_2885029.png',
    deadline: '2025-06-14T23:59:59',
    prize: '50,000',
    participants: 87,
    requirements: 'Original costume, character from Japanese media',
    category: 'Cosplay',
    difficulty: '1 Remaining'
  },
  {
    id: 'comp-2',
    title: 'Cosplay Walking',
    description: 'Jalanin dulu aja',
    thumbnail: 'https://th.bing.com/th/id/OIP.jCicG2ND0g0UC--8nyWOxwHaE7?rs=1&pid=ImgDetMain',
    deadline: '2025-06-15T12:00:00',
    prize: '30,000',
    participants: 42,
    requirements: 'Song from any anime, 3 minutes max',
    category: 'Music',
    difficulty: '1 Remaining'
  },
  {
    id: 'comp-3',
    title: 'Drawing Competition',
    description: 'Gambar suka suka',
    thumbnail: 'https://th.bing.com/th/id/OIP.zIikXGWQgGAxkLqlG9DXHwHaE8?rs=1&pid=ImgDetMain',
    deadline: '2025-06-10T23:59:59',
    prize: '40,000',
    participants: 63,
    requirements: 'Original artwork, A4 size, black and white or color',
    category: 'Art',
    difficulty: '1 Remaining'
  }
];

const CompetitionSection = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [likedCompetitions, setLikedCompetitions] = useState<Set<string>>(new Set());

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  const calculateTimeRemaining = (deadline: string) => {
    const end = new Date(deadline).getTime();
    const now = new Date().getTime();
    const difference = end - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return days > 0 ? `${days} days remaining` : `${hours} hours remaining`;
  };

  const toggleLike = (competitionId: string) => {
    setLikedCompetitions(prev => {
      const newSet = new Set(prev);
      newSet.has(competitionId) ? newSet.delete(competitionId) : newSet.add(competitionId);
      return newSet;
    });
  };

  const toggleForm = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {competitions.map((competition, index) => {
          const timeRemaining = calculateTimeRemaining(competition.deadline);
          return (
            <AnimatedElement 
              key={competition.id} 
              animation="fade-up" 
              duration={0.8} 
              delay={0.1 * index}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#e09f5f]/20">
                <div className="relative">
                  <img src={competition.thumbnail} alt={competition.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 right-3">
                    <button onClick={() => toggleLike(competition.id)} className={`p-2 rounded-full ${likedCompetitions.has(competition.id) ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700'} transition-colors`}>
                      <Heart className="w-4 h-4" fill={likedCompetitions.has(competition.id) ? "white" : "none"} />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                      {competition.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{competition.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-800">
                      {competition.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{competition.description}</p>
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2 text-[#e09f5f]" />
                      <span>{timeRemaining}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2 text-[#e09f5f]" />
                      <span>{competition.participants} participants</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="w-4 h-4 mr-2 text-[#e09f5f]" />
                      <span>{competition.prize}</span>
                    </div>
                  </div>
                  <button onClick={toggleForm} className="w-full bg-[#e09f5f] hover:bg-[#d08f4f] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                    Enter Now
                  </button>
                </div>
              </div>
            </AnimatedElement>
          );
        })}
      </div>

      {showNotification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in">
          Registration form will be available soon!
        </div>
      )}
    </div>
  );
};

export default CompetitionSection;