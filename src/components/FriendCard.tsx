
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FriendCardProps {
  name: string;
  path: string;
  emoji: string;
  color: string;
  description: string;
  gradientClass: string;
}

const FriendCard = ({ name, path, emoji, color, description, gradientClass }: FriendCardProps) => {
  return (
    <Link to={path}>
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-pulse-soft">
        <div className={`${gradientClass} h-32 flex items-center justify-center`}>
          <div className="text-6xl animate-bounce-gentle">{emoji}</div>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex items-center justify-between">
            <div className={`w-4 h-4 rounded-full ${color}`}></div>
            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-white/30 rounded-full"></div>
      </div>
    </Link>
  );
};

export default FriendCard;
