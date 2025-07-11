
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Car, MapPin, Compass, Zap } from 'lucide-react';

const Auto = () => {
  return (
    <ProfileLayout name="Auto" emoji="🚗" gradientClass="gradient-bg-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="Always On The Move" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-2xl">
              🚗
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600">Adventure Seeker</h3>
              <p className="text-gray-600">Life's a journey - let's make it an exciting one!</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hey! I'm Auto, and I believe life is meant to be lived in motion. Whether it's exploring new places, 
            trying new experiences, or just cruising through life with good friends, I'm always ready for the next adventure. 
            The road ahead is full of possibilities, and I can't wait to discover what's around the next corner! 🚗💨
          </p>
        </ContentSection>

        <ContentSection title="My Journey Essentials">
          <div className="space-y-3">
            {[
              { icon: "🗺️", text: "Road trips & travel planning" },
              { icon: "🏍️", text: "Motorcycles & speed thrills" },
              { icon: "📍", text: "Discovering hidden gems" },
              { icon: "🎒", text: "Backpacking adventures" },
              { icon: "📱", text: "Travel apps & navigation" },
              { icon: "🎵", text: "Road trip playlists" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Adventure Modes">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-200 to-emerald-200 rounded-lg p-4 text-center">
              <Car className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-green-800">Road Warrior</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-200 to-teal-200 rounded-lg p-4 text-center">
              <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-sm text-green-800">Location Scout</p>
            </div>
            <div className="bg-gradient-to-br from-teal-200 to-green-200 rounded-lg p-4 text-center">
              <Compass className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <p className="text-sm text-green-800">Direction Finder</p>
            </div>
            <div className="bg-gradient-to-br from-lime-200 to-green-200 rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 text-lime-600 mx-auto mb-2" />
              <p className="text-sm text-green-800">Energy Boost</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Travel Motto" className="lg:col-span-2">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 border-l-4 border-green-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "Life is a highway, and I want to ride it all night long! The best adventures happen when you're brave enough to take the scenic route! 🚗🌟"
            </blockquote>
            <cite className="text-green-600 font-medium">- Auto's adventure philosophy</cite>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Auto;
