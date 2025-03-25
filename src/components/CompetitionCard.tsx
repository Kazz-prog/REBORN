import React, { useState, useEffect } from 'react';
import { Clock, Users, Award, Heart } from 'lucide-react';

interface CompetitionCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  deadline: string;
  prize: string;
  participants: number;
  requirements: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  deadline,
  prize,
  participants,
  requirements,
  category,
  difficulty
}) => {
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  // Calculate time remaining
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const deadlineDate = new Date(deadline);
      const difference = deadlineDate.getTime(2) - now.getTime();
      
      if (difference <= 0) {
        setTimeRemaining('Competition ended');
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      setTimeRemaining(`${days}d ${hours}h remaining`);
    };
    
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 60000); // Update every minute
    
    return () => clearInterval(timer);
  }, [deadline]);

  // Toggle like state
  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  // Toggle entry form
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Get difficulty color
  return (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <div className="relative">
      <img 
        src={thumbnail} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-3 right-3">
        <button 
          onClick={toggleLike}
          className={`p-2 rounded-full ${isLiked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700'} transition-colors`}
        >
          <Heart className="w-4 h-4" fill={isLiked ? "white" : "none"} />
        </button>
      </div>
      <div className="absolute bottom-3 left-3">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-800">
          {difficulty}
        </span>
      </div>
    </div>
    
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-800">
          {category}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500 mr-4">
          <Clock className="w-4 h-4 mr-1 text-[#e09f5f]" />
          <span>{timeRemaining}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mr-4">
          <Users className="w-4 h-4 mr-1 text-[#e09f5f]" />
          <span>{participants} participants</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Award className="w-4 h-4 mr-1 text-[#e09f5f]" />
          <span>{prize}</span>
        </div>
      </div>
      
      <button 
        onClick={toggleForm}
        className="w-full bg-[#e09f5f] hover:bg-[#d08f4f] text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
      >
        <span>Enter Now</span>
      </button>
    </div>
      
      {/* Simple Entry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Enter {title}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e09f5f]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e09f5f]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="flex space-x-3">
                <button 
                  type="button"
                  onClick={toggleForm}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="button"
                  className="flex-1 bg-[#e09f5f] hover:bg-[#d08f4f] text-white py-2 px-4 rounded-lg transition-colors"
                >
                  Submit Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetitionCard;