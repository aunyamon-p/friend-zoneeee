import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Sparkles, Heart, Code, Coffee, Headphones, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const Noei = () => {
  return (
    <ProfileLayout name="Noei" emoji="🧈" gradientClass="gradient-bg-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* About Me */}
        <ContentSection title="About Me" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center text-2xl shadow-md">
              <img src="/img/noeiprofile.png" alt="Noei Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-pink-600">
                Aunyamon Plunsungket
              </h3>
              <p className="inline-block text-center bg-pink-600 text-pink-100 text-sm px-3 py-1 rounded-full">TN Frontend Vibe Noei</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hello there! I'm Noei, a computer science student currently studying at Bangkok University. 
            I'm now a trainee at iBOTNOI, working with the Vibecode team. 
            I've gained a lot of valuable experience here, and it's been such a joy working with the team 
            — <span className='font-bold text-pink-600 bg-pink-100 px-2 py-1 rounded-full'>it truly makes me feel happy makmak!</span> 💕
          </p>
        </ContentSection>

        {/* Favorite Things */}
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
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </ContentSection>

        {/* Mood Board */}
        <ContentSection title="My Mood Board">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Sparkles className="h-8 w-8 text-red-500 mx-auto mb-2" />, label: "Positive Vibes" },
              { icon: <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />, label: "Love & Kindness" },
              { icon: <Coffee className="h-8 w-8 text-red-500 mx-auto mb-2" />, label: "Cozy Life" },
              { icon: <Code className="h-8 w-8 text-red-500 mx-auto mb-2" />, label: "Happy Coding" },
              { icon: <Headphones className="h-8 w-8 text-red-500 mx-auto mb-2" />, label: "Music & Chill" },
              { icon: <Gift className="h-8 w-8 text-red-500 mx-auto mb-2" />, label: "Sweet Moments" },
            ].map((mood, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 text-center shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                {mood.icon}
                <p className="text-sm text-pink-800">{mood.label}</p>
              </motion.div>
            ))}
          </div>
        </ContentSection>

        {/* Quote */}
        <ContentSection title="Quote of the Day" className="lg:col-span-2 ">
          <motion.div
            className="bg-white/30 backdrop-blur-md rounded-xl p-6 border-l-4 border-pink-400 shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className='flex'>
              <img src="/img/quotenoei.jpg" className='w-20 h-20 rounded-md mr-10'></img>
              <div className='flex flex-col justify-between'>
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "Don't waste energy on what you can't control — focus on what you can"
                </blockquote>
                 <cite className="text-pink-600 font-medium">- Noei's daily reminder</cite>
              </div>
            </div>
            
          </motion.div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Noei;