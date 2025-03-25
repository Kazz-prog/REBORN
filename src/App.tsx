import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Users, Star, Ticket, Phone, Mail, Instagram, ChevronDown, Info } from 'lucide-react';
import ZoomableGuestStar from './components/ZoomableGuestStar';
import Navbar from './components/Navbar';
import CompetitionSection from './components/CompetitionSection';
import AnimatedElement from './components/AnimatedElement';

interface CollapsibleSectionProps {
  title: string;
  id: string;
  isExpanded: boolean;
  toggleExpanded: () => void;
  interactive?: boolean;
  tooltipText?: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  id, 
  isExpanded, 
  toggleExpanded, 
  interactive = false, 
  tooltipText = "", 
  children 
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center mb-8">
        <button 
          onClick={toggleExpanded}
          className={`group relative overflow-hidden rounded-lg bg-white font-bold text-2xl md:text-3xl py-4 px-8 transition-all duration-300 ${
            title === "Competitions" ? "border-2 border-[#FF8C00]" : 
            title === "Our Guest Stars" ? "border-2 border-[#e09f5f]" : ""
          }`}
          aria-expanded={isExpanded}
          aria-controls={id}
        >
          <span className="relative z-10">{title}</span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[#e09f5f] transition-all duration-300 group-hover:w-full" style={{ zIndex: 0 }}></span>
        </button>
        {interactive && tooltipText && (
          <div className="mt-2 text-sm text-gray-600">{tooltipText}</div>
        )}
      </div>
      
      <div 
        id={id}
        className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  );
};

function App() {
  const [showGuestStars, setShowGuestStars] = useState(false);
  const [showCompetitions, setShowCompetitions] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleGuestStars = () => {
    setShowGuestStars(!showGuestStars);
  };

  const toggleCompetitions = () => {
    setShowCompetitions(!showCompetitions);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Navbar />

      {/* Background Section - Changed color to #571f0c */}
      <div 
  id="home"
  className="min-h-[100vh] w-full relative flex items-center justify-center overflow-hidden"
>
        {/* Fixed video background */}
        <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
          preload="auto"
          onCanPlayThrough={(e) => e.currentTarget.play()}
>
<div className="absolute inset-0 w-full h-full object-cover pointer-events-none">
    <img 
      src="https://giffiles.alphacoders.com/843/84321.gif" 
      alt="Firework background"
      className="w-full h-full object-cover opacity-90"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  </div>
          {/* Fallback image in case video doesn't load */}
          
        </video>
        {/* Transparent Background*/}
        
  
        <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
          <AnimatedElement animation="fade-down" duration={0.8} delay={0.2}>
            <div className="mb-12 flex justify-center">
              <img 
                src="/logo.svg" 
                alt="Festival Logo" 
                className="w-60 md:w-50 lg:w-80 mx-auto"
              />
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={0.8} delay={0.4}>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-wider date-text">
              15 Juni <span className="italic text-[#e09f5f]">2025</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={0.8} delay={0.6}>
            <p className="text-xl md:text-2xl mb-8 font-light">Experience the magic of Japanese culture in the heart of Yogyakarta</p>
          </AnimatedElement>

          {/*Early Button Section*/}
          <AnimatedElement animation="fade-up" duration={0.8} delay={0.8}>
  <a 
    href="#about"
    onClick={(e) => handleSmoothScroll(e, 'about')}
    className="inline-block text-white text-lg hover:text-[#e09f5f] transition-all duration-300"
  >
    About us
  </a>
</AnimatedElement>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a 
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="cursor-pointer"
            >
              <ChevronDown className="w-8 h-8 text-white/80" />
            </a>
          </div>
        </div>
      </div>

      {/* Homew */}
      {/* Background Section - Changed color to #571f0c */}
      <div 
  id="homew"
  className="min-h-[100vh] w-full relative flex items-center justify-center overflow-hidden"
>
        {/* Fixed video background */}
        <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
          preload="auto"
          onCanPlayThrough={(e) => e.currentTarget.play()}
>
  <source src="src/fireworkbg.mp4" type="video/mp4" />
          {/* Fallback image in case video doesn't load */}
          
        </video>
        {/* Transparent Background*/}
        <div className="absolute inset-0 bg-black/50"></div> <div className="absolute inset-0 bg-gradient-to-b from-[#571f0c]/30 to-[#571f0c]/80 backdrop-blur-sm"></div>
  
        <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
          <AnimatedElement animation="fade-down" duration={0.8} delay={0.2}>
            <div className="mb-12 flex justify-center">
              <img 
                src="src/logo.svg" 
                alt="Festival Logo" 
                className="w-60 md:w-50 lg:w-80 mx-auto"
              />
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={0.8} delay={0.4}>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-wider date-text">
               <span className="italic text-[#e09f5f]">ICHI-ICHI REBORN</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={0.8} delay={0.6}>
            <p className="text-xl md:text-2xl mb-8 font-light">ICHI-ICHI berarti "satu demi satu" dalam bahasa Jepang, melambangkan kegiatan ekstrakurikuler ini sebagai bagian dari SMA 11 YK (1-1). Kami mengambil nama "Reborn" untuk menandakan bahwa event ini berbeda dari event ichi-ichi yang sudah berlangsung sebelumnya. Dalam Ichi-Ichi Reborn ini kami menghadirkan tema Hanami dan Matsuri yang akan membuat event ini memiliki nuansa festival.</p>
          </AnimatedElement>
          
          
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a 
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="cursor-pointer"
            >
              <ChevronDown className="w-8 h-8 text-white/80" />
            </a>
          </div>
        </div>
      </div>
      
     
      
      <div id="about" className="bg-[#571f0c] max-w-7xl mx-auto px-4 py-16 scroll-mt-24">
        <AnimatedElement animation="fade-up" duration={0.8}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Event Details</h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement animation="fade-up" duration={0.8} delay={0.1}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#e09f5f]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#e3861c]">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-10 h-10 text-[#e3861c] transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Time</h3>
              <p className="text-gray-600 text-center">14:00 PM - 21:10 PM</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={0.8} delay={0.2}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#e09f5f]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#e09f5f]">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="w-10 h-10 text-[#e3861c] transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Location</h3>
              <p className="text-gray-600 text-center">State Senior High School 11 Yogyakarta</p>
              <p className="text-gray-500 text-sm text-center mt-2">Jl. AM Sangaji No.50, Yogyakarta</p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-up" duration={0.8} delay={0.3}>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#e09f5f]/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#e09f5f]">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-[#e3861c] transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Capacity</h3>
              <p className="text-gray-600 text-center">2000 Attendees</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div className="bg-[#e3861c] h-2.5 rounded-full w-3/4"></div>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">20% tickets sold</p>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="fade-up" duration={0.8} delay={0.4}>
          <div className="mt-12 bg-white/10 p-6 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">Event Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <AnimatedElement animation="fade-left" duration={0.8} delay={0.1}>
                  <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                    <p className="text-[#e3861c] font-bold">14:00 - 15:30</p>
                    <p className="font-medium">Opening Ceremony</p>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="fade-left" duration={0.8} delay={0.2}>
                  <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                    <p className="text-[#e3861c] font-bold">15:45 - 17:00</p>
                    <p className="font-medium">Cosplay Competition</p>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="fade-left" duration={0.8} delay={0.3}>
                  <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                    <p className="text-[#e3861c] font-bold">17:15 - 18:30</p>
                    <p className="font-medium">Kohisekai Performance</p>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="fade-left" duration={0.8} delay={0.4}>
                  <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                    <p className="text-[#e3861c] font-bold">18:45 - 19:45</p>
                    <p className="font-medium">Gochikara Performance</p>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="fade-left" duration={0.8} delay={0.5}>
                  <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                    <p className="text-[#e3861c] font-bold">20:00 - 21:00</p>
                    <p className="font-medium">Kobo Kanaeru Calligraphy</p>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="fade-left" duration={0.8} delay={0.6}>
                  <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                    <p className="text-[#e3861c] font-bold">21:00 - 21:10</p>
                    <p className="font-medium">Closing Ceremony</p>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <div id="gueststar" className="bg-[#571f0c] py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedElement animation="fade-up" duration={0.8}>
            <CollapsibleSection 
              title="Our Guest Stars" 
              id="gueststar-content" 
              isExpanded={showGuestStars}
              toggleExpanded={toggleGuestStars}
              interactive={true}
              tooltipText=""
            >
              <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatedElement animation="fade-up" duration={0.8} delay={0.1}>
                  <ZoomableGuestStar 
                    src="https://th.bing.com/th/id/OIP.RMWcqxJQGiRxqB8qruANlAHaHa?rs=1&pid=ImgDetMain"
                    alt="Kohisekai"
                    type="Idol Group"
                    name="Kohisekai"
                  />
                </AnimatedElement>
                
                <AnimatedElement animation="fade-up" duration={0.8} delay={0.2}>
                  <ZoomableGuestStar 
                    src="https://assets.promediateknologi.id/crop/0x0:0x0/750x0/webp/photo/2023/07/05/346286579_791147965968495_1885523074990498571_n-1878331579.jpg"
                    alt="Gochikara"
                    type="Idol Group"
                    name="Gochikara"
                  />
                </AnimatedElement>
                
                <AnimatedElement animation="fade-up" duration={0.8} delay={0.3}>
                  <ZoomableGuestStar 
                    src="https://th.bing.com/th/id/OIP.rFH7WmxXbiM-8HTK5LIDZQHaHa?rs=1&pid=ImgDetMain"
                    alt="???"
                    type="???"
                    name="???"
                    description="???"
                  />
                </AnimatedElement>
              </div>
            </CollapsibleSection>
          </AnimatedElement>
        </div>
      </div>

      <div id="competitions" className="bg-[#571f0c] py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedElement animation="fade-up" duration={0.8}>
            <CollapsibleSection 
              title="Competitions" 
              id="competitions-content" 
              isExpanded={showCompetitions}
              toggleExpanded={toggleCompetitions}
              interactive={true}
            >
              <div className="pt-8">
                <CompetitionSection />
              </div>
            </CollapsibleSection>
          </AnimatedElement>
        </div>
      </div>

      {/* Footer Section*/}
<footer id="contact" className="bg-[#212121] text-white py-12 scroll-mt-24">
  <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <AnimatedElement animation="fade-right" duration={0.8}>
              <div className="flex items-center mb-6 md:mb-0">
                <img 
                  src="src/logo.svg" 
                  alt="Japanese Lantern" 
                  className="w-40 h-40 mr-40"
                />
                <span className="text-xl font-semibold"></span>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-left" duration={0.8}>
              <div className="flex flex-col space-y-4">
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-[#e3861c]" />
                  <a href="tel:+6281234567890" className="hover:text-[#e3861c] transition-colors">+62 812-3456-7890</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-[#e3861c]" />
                  <a href="mailto:info@ichiichi.com" className="hover:text-[#e3861c] transition-colors">info@ichiichi.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-5 h-5 text-[#e3861c]" />
                  <a href="https://instagram.com/ichiichi" target="_blank" rel="noopener noreferrer" className="hover:text-[#e3861c] transition-colors">@ichichireborn</a>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;