import { ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProfileLayoutProps {
  name: string;
  emoji: string;
  gradientClass: string;
  children: ReactNode;
}

const ProfileLayout = ({ name, emoji, gradientClass, children }: ProfileLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 animate-gradient">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Friend Zone</span>
        </Link>
      </div>

      {/* Profile header */}
      <div className={`${gradientClass} py-16 mb-8 relative z-10`}>
        <div className="container mx-auto px-4 text-center">
          <div className="text-8xl mb-4 animate-bounce-gentle">{emoji}</div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{name}</h1>
          <div className="inline-flex items-center justify-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full shadow-sm ">
            <Heart className="h-5 w-5" />
            <span>Welcome to my corner of the Friend Zone!</span>
            <Heart className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
