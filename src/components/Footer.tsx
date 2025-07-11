
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-lg text-gray-700">
          <span>made with</span>
          <Heart className="h-5 w-5 text-red-500 animate-pulse" />
          <span>by 6 friends</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Friendship is the best zone to be in! 💕
        </div>
      </div>
    </footer>
  );
};

export default Footer;
