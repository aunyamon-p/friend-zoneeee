
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Sparkles, Heart,Code ,Coffee ,Headphones ,Gift } from 'lucide-react';

const Noei = () => {
  return (
    <ProfileLayout name="Noei" emoji="🧈" gradientClass="gradient-bg-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="About Me" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center text-2xl">
              <img src="/noeiprofile.png" ></img>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pink-600">Aunyamon Plunsungket</h3>
              <p className="text-gray-600">TN Frontend Vibe Noei</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hello there! I'm Noei, a computer science student currently studying at Bangkok University. 
            I'm now a trainee at iBOTNOI, working with the Vibecode team. 
            I've gained a lot of valuable experience here, and it's been such a joy working with the team 
            — <span className='font-bold text-pink-600 bg-pink-100 px-2 py1 rounded-full'>it truly makes me feel happy makmak!</span> 💕
          </p>
        </ContentSection>

        <ContentSection title="My Favorite Things">
          <div className="space-y-3">
            {[
              { icon: "🌿", text: "Natural places and things" },
              { icon: "📸", text: "Photography & Arts" },
              { icon: "🐶", text: "Cute animal" },
              { icon: "☕", text: "Relaxation time" },
              { icon: "🎀", text: "Shopping for cute accessories & fashion" },
              { icon: "🎵", text: "Listening to music" }
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
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center">
              <Sparkles className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Positive Vibes</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Love & Kindness</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center">
              <Coffee className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Cozy Life</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center">
              <Code className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Happy Coding</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center">
              <Headphones className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Music & Chill</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center">
              <Gift className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-pink-800">Sweet Moments</p>
            </div>
            
          </div>
        </ContentSection>

        <ContentSection title="Quote of the Day" className="lg:col-span-2">
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-6 border-l-4 border-pink-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "Don't waste energy on what you can't control — focus on what you can 🌸✨"
            </blockquote>
            <cite className="text-pink-600 font-medium">- Noei's daily reminder</cite>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Noei;
