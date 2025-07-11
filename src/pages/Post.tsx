import React from 'react';
import { Palette, Dumbbell, Brush, Lightbulb, Instagram, MessageCircle, Sparkles, Heart, Star, Camera, Coffee, Mountain, Gamepad2, Plane } from 'lucide-react';

const ProfileLayout = ({ children, name, emoji, emojiStyle }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-25 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-yellow-200 rounded-full opacity-30 animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div 
              className="text-8xl mb-4 animate-bounce flex items-center justify-center"
              style={emojiStyle}
            >
              {emoji}
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full animate-ping"></div>
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2">
            {name}
          </h1>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 animate-pulse" fill="currentColor" />
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

const ContentSection = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/50 relative overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-10 -mr-10 -mt-10"></div>
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-6 relative z-10">
        {title}
      </h2>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <ProfileLayout 
      name="₍ᐢ. .ᐢ₎ POST ₍ᐢ. .ᐢ₎"
      emoji={
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-200/30 shadow-xl">
          <img 
            src="img/post-disprofile.jpg" 
            alt="Post's profile" 
            className="w-full h-full object-cover"
          />
        </div>
      }
      emojiStyle={{
        backgroundColor: "rgba(255,255,255,0.95)",
        borderRadius: "50%",
        padding: "8px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1), 0 0 0 4px rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        border: "3px solid rgba(255,192,203,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Floating cute elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-20 -left-2 w-6 h-6 bg-purple-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
        
        <ContentSection title="INFP Soul 🐰✨" className="lg:col-span-2 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 -ml-12 -mb-12"></div>

          <div className="flex flex-col gap-6 mb-8 relative z-10">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center text-3xl shadow-2xl border-4 border-white relative overflow-hidden">
              <img 
                src="img/post-profile.JPG" 
                alt="Post's profile" 
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full animate-ping"></div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">Creative & Chill</h3>
              <p className="text-gray-600 text-xl mb-3">Living life creatively, one vibe at a time! 🌟</p>
              <div className="flex gap-3">
                <span className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">INFP</span>
                <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">Designer</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 border-l-4 border-pink-400 relative shadow-xl">
            <div className="absolute top-4 right-4 flex gap-2">
              <Sparkles className="h-6 w-6 text-pink-400 animate-pulse" />
              <Heart className="h-6 w-6 text-purple-400 animate-pulse" />
            </div>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              สวัสดีฮะ ૮꒰ ˶• ༝ •˶꒱ა ♡ เราชื่อโพสต์ ชื่อจริงคือปัณณ์ มีอยู่พยางค์เดียว😎 cool mai? but u can call me 'พ้ด' instead cuz if u try to type my full nickname thats kinda hard tho and เราถนัด Design นะ แต่เราก็พอได้ data sci so i applied to ds team tho. 📒🔍
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              เป็นคนชอบไปยิมมากๆ 💪 ส่วนใหญ่จะไป cardio + weight แล้วก็ชอบไปเที่ยว ปีนเขา hiking เวลาว่างๆ ชอบกินข้าวผัด และขนมปังมากๆๆ 🥖 ⭐️⭐️⭐️ ! im positive thinking mak. if y'all wanna talk to me just text ma naa🌟✨
            </p>
          </div>
        </ContentSection>

        <ContentSection title="My Favorite Things 💕" className="relative">
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-300 rounded-full opacity-50 animate-bounce"></div>
          <div className="space-y-4">
            {[
              {text: "Gym sessions 🏋️‍♀️ ", color: "from-red-100 to-pink-100", iconComponent: Dumbbell },
              {text: "Fried rice & Bread lover 🥘", color: "from-orange-100 to-yellow-100", iconComponent: Coffee },
              {text: "Sweet treats & desserts 🍰", color: "from-pink-100 to-purple-100", iconComponent: Heart },
              {text: "Hiking & mountain climbing 🥾", color: "from-green-100 to-blue-100", iconComponent: Mountain },
              {text: "Positive vibes & good energy ✨", color: "from-yellow-100 to-pink-100", iconComponent: Sparkles }
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-4 p-5 bg-gradient-to-r ${item.color} rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/70 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -mr-8 -mt-8"></div>
                <div className="flex items-center gap-3">

                  <item.iconComponent className="h-6 w-6 text-gray-600" />
                </div>
                <span className="text-gray-700 font-semibold text-lg">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="My Vibes 🌈" className="relative">
          <div className="absolute -top-1 -left-1 w-6 h-6 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Palette, text: "Design Lover", color: "from-blue-200 to-purple-200", textColor: "text-blue-800" },
              { icon: Dumbbell, text: "Gym Enthusiast", color: "from-indigo-200 to-blue-200", textColor: "text-indigo-800" },
              { icon: Brush, text: "Art Feels", color: "from-purple-200 to-pink-200", textColor: "text-purple-800" },
              { icon: Lightbulb, text: "Good Energy", color: "from-cyan-200 to-blue-200", textColor: "text-cyan-800" },
              { icon: Gamepad2, text: "Gamer", color: "from-pink-200 to-red-200", textColor: "text-pink-800" },
              { icon: Plane, text: "Travel Explorer", color: "from-green-200 to-teal-200", textColor: "text-green-800" }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-3 border-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-8 h-8 bg-white/30 rounded-full -mr-4 -mt-4"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-white/20 rounded-full -ml-3 -mb-3"></div>
                <item.icon className="h-12 w-12 mx-auto mb-4 drop-shadow-lg" style={{ color: item.textColor.replace('text-', '').replace('-800', '') }} />
                <p className={`text-sm font-bold ${item.textColor}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </ContentSection>


        <ContentSection title="Hit Me Up! 📱✨" className="lg:col-span-2 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 -mr-12 -mt-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 border-l-4 border-pink-400 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-purple-200 rounded-full opacity-20 -ml-6 -mb-6"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full shadow-xl">
                  <Instagram className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-pink-700">Instagram</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">Check out my photos & daily vibes!</p>
              <a 
                href="https://instagram.com/hi.mheekhao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-lg"
              >
                <span>@hi.mheekhao</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-3xl p-8 border-l-4 border-indigo-400 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-blue-200 rounded-full opacity-20 -ml-6 -mb-6"></div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-4 rounded-full shadow-xl">
                  <MessageCircle className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-indigo-700">Discord</h4>
              </div>
              <p className="text-gray-700 mb-6 text-lg">Let's chat and hang out online!</p>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-xl font-bold text-lg">
                <span>padppraymaihrialaew</span>
                <MessageCircle className="h-6 w-6" />
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 border-3 border-purple-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 bg-pink-200 rounded-full opacity-20 -ml-10 -mt-10"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-200 rounded-full opacity-20 -mr-8 -mb-8"></div>
            <Heart className="h-10 w-10 text-purple-500 mx-auto mb-4 animate-pulse" />
            <p className="text-gray-700 text-xl font-semibold relative z-10">
              Don't be shy! I love meeting new people and spreading good vibes 🌟✨
            </p>
          </div>
        </ContentSection>

        <ContentSection title="My Motto 🌟" className="lg:col-span-2 relative">
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-300 rounded-full opacity-50 animate-bounce"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border-l-4 border-blue-400 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-10 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-yellow-200 rounded-full opacity-10 -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-4 rounded-full shadow-xl">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-700">Life Philosophy</h3>
              </div>
              <blockquote className="text-2xl italic text-gray-700 mb-6 font-semibold leading-relaxed">
                "Life's too short to not be creative and positive! Just do what makes you happy and spread good vibes mai 🌈✨"
              </blockquote>
              <cite className="text-blue-600 font-bold text-xl">- Post's chill mantra</cite>
            </div>
          </div>
        </ContentSection>
      </div>
    </ProfileLayout>
  );
};

export default Post;
