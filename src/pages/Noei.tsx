
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Sparkles, Heart, Code, Coffee, Headphones, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const Noei = () => {
  return (
    <ProfileLayout name="Noei" emoji="🧈" gradientClass="gradient-bg-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

        {/* About Me */}
        <ContentSection title="About Me" className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 rounded-full flex items-center justify-center text-2xl shadow-md flex-shrink-0">
              <img src="/img/noeiprofile.jpg" alt="Noei Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-pink-600">
                Aunyamon Plunsungket
              </h3>
              <p className="inline-block text-center bg-pink-600 text-pink-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full mt-1">TN Frontend Vibe Noei</p>
            </div>
          </div>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Hello there! I'm Noei, a computer science student currently studying at Bangkok University. 
            I'm now a trainee at iBOTNOI, working with the Vibecode team. 
            I've gained a lot of valuable experience here, and it's been such a joy working with the team 
            — <span className='font-bold text-pink-600 bg-pink-100 px-1 sm:px-2 py-1 rounded-full text-xs sm:text-sm'>it truly makes me feel happy makmak!</span> 💕
          </p>
        </ContentSection>

        {/* Favorite Things */}
        <ContentSection title="My Favorite Things">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {[
              { image: "/img/noeifav1.png", text: "Natural" },
              { image: "/img/noeifav2.png", text: "Arts" },
              { image: "/img/noeifav3.png", text: "Cute animal" },
              { image: "/img/noeifav4.png", text: "Relaxation time" },
              { image: "/img/noeifav5.png", text: "Shopping" },
              { image: "/img/noeifav6.png", text: "Music" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <img src={item.image} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md object-cover"></img>
                <span className="text-xs sm:text-sm text-gray-700 text-center">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </ContentSection>

        {/* Mood Board */}
        <ContentSection title="My Mood Board">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mx-auto mb-2" />, label: "Positive Vibes" },
              { icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mx-auto mb-2" />, label: "Love & Kindness" },
              { icon: <Coffee className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mx-auto mb-2" />, label: "Cozy Life" },
              { icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mx-auto mb-2" />, label: "Happy Coding" },
              { icon: <Headphones className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mx-auto mb-2" />, label: "Music & Chill" },
              { icon: <Gift className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 mx-auto mb-2" />, label: "Sweet Moments" },
            ].map((mood, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-3 sm:p-4 text-center shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                {mood.icon}
                <p className="text-xs sm:text-sm text-pink-800">{mood.label}</p>
              </motion.div>
            ))}
          </div>
        </ContentSection>

        {/* Quote */}
        <ContentSection title="Quote of the Day" className="lg:col-span-2">
          <motion.div
            className="bg-white/30 backdrop-blur-md bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl p-4 sm:p-6 border-l-4 border-pink-400 shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className='flex flex-col sm:flex-row gap-4'>
              <img src="/img/noeiprofile.jpg" className='w-16 h-16 sm:w-20 sm:h-20 rounded-md mx-auto sm:mx-0 flex-shrink-0'></img>
              <div className='flex flex-col justify-between text-center sm:text-left'>
                <blockquote className="text-base sm:text-lg italic text-gray-700 mb-2">
                  "Don't waste energy on what you can't control — focus on what you can"
                </blockquote>
                <cite className="text-pink-600 font-medium text-sm sm:text-base">- Noei's daily reminder</cite>
              </div>
            </div>
          </motion.div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Noei;
