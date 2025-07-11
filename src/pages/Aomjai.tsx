
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Sun, Smile, Zap, Coffee } from 'lucide-react';

const Aomjai = () => {
  return (
    <ProfileLayout name="Aomjai" emoji="´ސު｀" gradientClass="gradient-bg-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="Sunshine Personality" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center text-2xl">
              ☀️
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-600">Bright & Cheerful</h3>
              <p className="text-gray-600">Spreading sunshine and positive vibes everywhere!</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hello sunshine! I'm Aomjai, and I believe every day is a new opportunity to shine bright and make someone smile. 
            Like the morning sun, I love starting each day with energy, optimism, and endless possibilities. 
            Life's too beautiful not to celebrate every little moment! Let's brighten the world together! ☀️✨
          </p>
        </ContentSection>

        <ContentSection title="What Makes Me Glow">
          <div className="space-y-3">
            {[
              { icon: "🌅", text: "Early morning sunrises" },
              { icon: "🌻", text: "Sunflowers & bright flowers" },
              { icon: "🏃‍♀️", text: "Morning runs & outdoor activities" },
              { icon: "☕", text: "Fresh coffee & breakfast treats" },
              { icon: "🎵", text: "Upbeat music & dancing" },
              { icon: "📖", text: "Motivational books & quotes" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Positive Energy Hub">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg p-4 text-center">
              <Sun className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-yellow-800">Daily Sunshine</p>
            </div>
            <div className="bg-gradient-to-br from-orange-200 to-yellow-200 rounded-lg p-4 text-center">
              <Smile className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <p className="text-sm text-yellow-800">Endless Smiles</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-200 to-amber-200 rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-sm text-yellow-800">High Energy</p>
            </div>
            <div className="bg-gradient-to-br from-amber-200 to-yellow-200 rounded-lg p-4 text-center">
              <Coffee className="h-8 w-8 text-amber-600 mx-auto mb-2" />
              <p className="text-sm text-yellow-800">Morning Vibes</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Daily Dose of Sunshine" className="lg:col-span-2">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border-l-4 border-yellow-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "Keep your face towards the sunshine, and shadows will fall behind you. Every day is a gift - that's why they call it the present! ☀️🎁"
            </blockquote>
            <cite className="text-yellow-600 font-medium">- Aomjai's daily motivation</cite>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Aomjai;
