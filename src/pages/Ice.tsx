
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Snowflake, Mountain, Wind, Waves } from 'lucide-react';

const Ice = () => {
  return (
    <ProfileLayout name="Ice" emoji="❄️" gradientClass="gradient-bg-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="Cool & Refreshing" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-cyan-200 rounded-full flex items-center justify-center text-2xl">
              ❄️
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-600">Chill & Composed</h3>
              <p className="text-gray-600">Bringing cool vibes and fresh perspectives!</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hey there! I'm Ice, and I bring that refreshing, cool energy to everything I do. Like a gentle winter breeze, 
            I believe in staying calm, collected, and crystal clear in my thoughts. I find beauty in simplicity, 
            peace in quiet moments, and strength in staying true to myself. Welcome to my serene corner of the Friend Zone! ❄️💎
          </p>
        </ContentSection>

        <ContentSection title="My Cool Collection">
          <div className="space-y-3">
            {[
              { icon: "🏔️", text: "Mountain adventures & hiking" },
              { icon: "❄️", text: "Winter sports & snow activities" },
              { icon: "🧊", text: "Iced coffee & cold beverages" },
              { icon: "🌊", text: "Ocean waves & beach walks" },
              { icon: "🎧", text: "Chill music & lo-fi beats" },
              { icon: "📱", text: "Minimalist design & tech" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Chill Zone">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-cyan-200 to-blue-200 rounded-lg p-4 text-center">
              <Snowflake className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <p className="text-sm text-cyan-800">Cool Thoughts</p>
            </div>
            <div className="bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg p-4 text-center">
              <Mountain className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-cyan-800">High Perspectives</p>
            </div>
            <div className="bg-gradient-to-br from-teal-200 to-cyan-200 rounded-lg p-4 text-center">
              <Wind className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <p className="text-sm text-cyan-800">Fresh Air</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-200 to-sky-200 rounded-lg p-4 text-center">
              <Waves className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <p className="text-sm text-cyan-800">Flowing Vibes</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Cool Philosophy" className="lg:col-span-2">
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 border-l-4 border-cyan-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "Stay cool, stay true, stay you. Sometimes the most refreshing thing you can be is authentically yourself. ❄️💙"
            </blockquote>
            <cite className="text-cyan-600 font-medium">- Ice's life philosophy</cite>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Ice;
