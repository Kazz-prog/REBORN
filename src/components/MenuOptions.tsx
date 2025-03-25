import React from 'react';
import { Leaf, Wheat, Milk, Fish } from 'lucide-react';

interface DietaryIconProps {
  type: 'vegetarian' | 'gluten-free' | 'dairy-free' | 'seafood';
  className?: string;
}

const DietaryIcon: React.FC<DietaryIconProps> = ({ type, className = "" }) => {
  const getIcon = () => {
    switch (type) {
      case 'vegetarian':
        return <Leaf className={`w-4 h-4 text-green-500 ${className}`} />;
      case 'gluten-free':
        return <Wheat className={`w-4 h-4 text-amber-500 ${className}`} />;
      case 'dairy-free':
        return <Milk className={`w-4 h-4 text-blue-400 ${className}`} />;
      case 'seafood':
        return <Fish className={`w-4 h-4 text-cyan-500 ${className}`} />;
      default:
        return null;
    }
  };

  return getIcon();
};

interface FoodItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  dietaryOptions: Array<'vegetarian' | 'gluten-free' | 'dairy-free' | 'seafood'>;
}

const FoodItem: React.FC<FoodItemProps> = ({ 
  name, 
  description, 
  price, 
  image, 
  dietaryOptions 
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="w-full md:w-1/4 h-24 md:h-auto">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-[#e09f5f] font-medium">{price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="flex items-center space-x-2">
          {dietaryOptions.map((option, index) => (
            <div 
              key={index} 
              className="flex items-center bg-gray-100 px-2 py-1 rounded-full text-xs"
            >
              <DietaryIcon type={option} className="mr-1" />
              <span>{option.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuOptions: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Main Dishes</h3>
        <FoodItem 
          name="Chicken Teriyaki Bowl" 
          description="Grilled chicken with teriyaki sauce served over steamed rice with vegetables" 
          price="Rp. 45.000" 
          image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000" 
          dietaryOptions={['gluten-free']}
        />
        <FoodItem 
          name="Vegetable Sushi Platter" 
          description="Assorted vegetable sushi rolls with wasabi, ginger, and soy sauce" 
          price="Rp. 40.000" 
          image="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=1000" 
          dietaryOptions={['vegetarian', 'gluten-free']}
        />
        <FoodItem 
          name="Miso Ramen" 
          description="Traditional Japanese noodle soup with miso broth, tofu, and vegetables" 
          price="Rp. 38.000" 
          image="https://images.unsplash.com/photo-1557872943-16a5ac26437e?auto=format&fit=crop&q=80&w=1000" 
          dietaryOptions={['vegetarian']}
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Snacks & Sides</h3>
        <FoodItem 
          name="Takoyaki (6 pcs)" 
          description="Japanese octopus balls topped with takoyaki sauce, mayo, and bonito flakes" 
          price="Rp. 25.000" 
          image="https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&q=80&w=1000" 
          dietaryOptions={['seafood']}
        />
        <FoodItem 
          name="Edamame" 
          description="Steamed young soybeans lightly salted" 
          price="Rp. 20.000" 
          image="https://images.unsplash.com/photo-1564894809611-1742fc40ed80?auto=format&fit=crop&q=80&w=1000" 
          dietaryOptions={['vegetarian', 'gluten-free', 'dairy-free']}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-3">Beverages</h3>
        <FoodItem 
          name="Matcha Latte" 
          description="Traditional Japanese green tea with steamed milk" 
          price="Rp. 22.000" 
          image="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=1000" 
          dietaryOptions={[]}
        />
        <FoodItem 
          name="Ramune Soda" 
          description="Japanese marble soda in various flavors" 
          price="Rp. 18.000" 
          image="https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80&w=1000" 
          dietaryOptions={['vegetarian', 'gluten-free', 'dairy-free']}
        />
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Please inform our staff of any allergies or dietary restrictions. 
          Special accommodations can be made with advance notice.
        </p>
      </div>
    </div>
  );
};

export default MenuOptions;