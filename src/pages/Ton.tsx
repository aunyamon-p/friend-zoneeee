
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Music, Headphones, Radio, Star } from 'lucide-react';

const Ton = () => {
  return (
    <ProfileLayout name="Ton" emoji="🎵" gradientClass="gradient-bg-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="Music Lover & Dreamer" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center text-2xl">
              🎵
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-600">Melodic Soul</h3>
              <p className="text-gray-600">Living life one song at a time, dreaming in melodies!</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hello! I'm Ton, and music is the soundtrack to my soul. I believe every moment has its perfect song, 
            every emotion its matching melody. Whether I'm discovering new artists, creating playlists for every mood, 
            or just getting lost in a beautiful symphony, music connects me to the world in the most magical way. 
            Let's dance through life together! 🎵✨
          </p>
        </ContentSection>

        <ContentSection title="My Musical Universe">
          <div className="space-y-3">
            {[
              { icon: "🎧", text: "High-quality headphones & audio gear" },
              { icon: "🎸", text: "Learning guitar & ukulele" },
              { icon: "🎤", text: "Singing covers & karaoke nights" },
              { icon: "📻", text: "Discovering new artists & genres" },
              { icon: "💿", text: "Vinyl records & vintage music" },
              { icon: "🎹", text: "Piano melodies & compositions" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Musical Vibes">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg p-4 text-center">
              <Music className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-purple-800">Harmony Creator</p>
            </div>
            <div className="bg-gradient-to-br from-violet-200 to-purple-200 rounded-lg p-4 text-center">
              <Headphones className="h-8 w-8 text-violet-600 mx-auto mb-2" />
              <p className="text-sm text-purple-800">Audio Explorer</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-200 to-purple-200 rounded-lg p-4 text-center">
              <Radio className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-sm text-purple-800">Frequency Finder</p>
            </div>
            <div className="bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-lg p-4 text-center">
              <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-purple-800">Dream Chaser</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Musical Inspiration" className="lg:col-span-2">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border-l-4 border-purple-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "Where words fail, music speaks. Every song tells a story, every melody carries a dream. Let the music play and let your soul dance! 🎵💜"
            </blockquote>
            <cite className="text-purple-600 font-medium">- Ton's melodic wisdom</cite>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Ton;
