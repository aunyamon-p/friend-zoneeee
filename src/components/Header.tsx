
import { Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-pink-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300">
          <Users className="h-8 w-8 text-pink-500" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Friend Zone
          </h1>
          <Heart className="h-6 w-6 text-red-400 animate-pulse" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
