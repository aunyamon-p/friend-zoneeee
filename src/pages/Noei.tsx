
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Sparkles, Heart, Star } from 'lucide-react';

const Noei = () => {
  return (
    <ProfileLayout name="Noei" emoji="🌸" gradientClass="gradient-bg-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="About Me" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center text-2xl">
              🌸
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pink-600">Sweet & Bubbly</h3>
              <p className="text-gray-600">Always spreading positivity wherever I go!</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hello there! I'm Noei, and I believe life is like a beautiful garden - it blooms the most when nurtured with love, 
            laughter, and good friends. I love collecting pretty things, taking photos of flowers, and making everyone around me smile! 
            Welcome to my little corner of happiness! 💕
          </p>
        </ContentSection>

        <ContentSection title="My Favorite Things">
          <div className="space-y-3">
            {[
              { icon: "🌺", text: "Cherry blossoms in spring" },
              { icon: "📸", text: "Photography & aesthetic feeds" },
              { icon: "🍓", text: "Strawberry everything!" },
              { icon: "☕", text: "Cozy café moments" },
              { icon: "🎀", text: "Cute accessories & fashion" },
              { icon: "📚", text: "Romance novels & poetry" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="My Mood Board">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-pink-200 to-rose-200 rounded-lg p-4 text-center">
              <Sparkles className="h-8 w-8 text-pink-600 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Sparkly Things</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Love & Kindness</p>
            </div>
            <div className="bg-gradient-to-br from-rose-200 to-pink-300 rounded-lg p-4 text-center">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Dreams & Goals</p>
            </div>
            <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg p-4 text-center">
              <span className="text-2xl block mb-2">🌸</span>
              <p className="text-sm text-pink-800">Natural Beauty</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Quote of the Day" className="lg:col-span-2">
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-6 border-l-4 border-pink-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "Be yourself; everyone else is already taken. Life is too short to be anything but happy! 🌸✨"
            </blockquote>
            <cite className="text-pink-600 font-medium">- Noei's daily reminder</cite>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Noei;
