import React, { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react'; // Added Ticket icon import

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Get the navbar height to adjust scroll position
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      
      // Calculate the target position with offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      // Scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2c2c2c] shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home"
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="flex items-center"
            >
              <img 
                src="src/logo.svg" 
                alt="Logo" 
                className="h-12 w-12 mr-2"
              />
              <span className={`text-xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>
               
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#e09f5f] transition-colors duration-300`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#e09f5f] transition-colors duration-300`}
            >
              About
            </a>
            <a 
              href="#gueststar" 
              onClick={(e) => handleSmoothScroll(e, 'gueststar')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#e09f5f] transition-colors duration-300`}
            >
              Guest Stars
            </a>
            <a 
              href="#tickets" 
              onClick={(e) => handleSmoothScroll(e, 'tickets')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#e09f5f] transition-colors duration-300`}
            >
              Tickets
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className={`${isScrolled ? 'text-white' : 'text-white'} hover:text-[#e09f5f] transition-colors duration-300`}
            >
              Contact
            </a>
            <a 
              href="#tickets"
              onClick={(e) => handleSmoothScroll(e, 'tickets')}
              className="bg-[#e09f5f] hover:bg-[#d08f4f] text-white px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Ticket className="w-4 h-4" /> {/* Added Ticket icon */}
              <span>Get Tickets</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
       <div 
        className={`md:hidden bg-[#2c2c2c] overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-4">
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="block text-white hover:text-[#e09f5f] transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="block text-white hover:text-[#e09f5f] transition-colors duration-300"
          >
            About
          </a>
          <a 
            href="#gueststar" 
            onClick={(e) => handleSmoothScroll(e, 'gueststar')}
            className="block text-white hover:text-[#e09f5f] transition-colors duration-300"
          >
            Guest Stars
          </a>
          <a 
            href="#tickets" 
            onClick={(e) => handleSmoothScroll(e, 'tickets')}
            className="block text-white hover:text-[#e09f5f] transition-colors duration-300"
          >
            Tickets
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="block text-white hover:text-[#e09f5f] transition-colors duration-300"
          >
            Contact
          </a>
          <a 
            href="#tickets"
            onClick={(e) => handleSmoothScroll(e, 'tickets')}
            className="block w-full bg-[#e09f5f] hover:bg-[#d08f4f] text-white px-4 py-2 rounded-full text-sm text-center transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <Ticket className="w-4 h-4" /> {/* Added Ticket icon */}
            <span>Get Tickets</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;