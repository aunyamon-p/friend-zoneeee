
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FriendCard from '@/components/FriendCard';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const friends = [
    {
      name: "Noei",
      path: "/noei",
      emoji: "🧈",
      color: "bg-pink-400",
      description: "TN Frontend Vibe Noei",
      gradientClass: "gradient-bg-1"
    },
    {
      name: "Post",
      path: "/post",
      emoji: "🎨",
      color: "bg-blue-400",
      description: "Creative and artistic soul",
      gradientClass: "gradient-bg-2"
    },
    {
      name: "Aomjai",
      path: "/aomjai",
      emoji: "☀️",
      color: "bg-yellow-400",
      description: "Bright and cheerful spirit",
      gradientClass: "gradient-bg-3"
    },
    {
      name: "Ice",
      path: "/ice",
      emoji: "❄️",
      color: "bg-cyan-400",
      description: "Cool and refreshing vibe",
      gradientClass: "gradient-bg-4"
    },
    {
      name: "Auto",
      path: "/auto",
      emoji: "🚗",
      color: "bg-green-400",
      description: "Always on the move",
      gradientClass: "gradient-bg-5"
    },
    {
      name: "Ton",
      path: "/ton",
      emoji: "🎵",
      color: "bg-purple-400",
      description: "Music lover and dreamer",
      gradientClass: "gradient-bg-6"
    },
    {
      name: "Fai",
      path: "/fai",
      emoji: "🔥",
      color: "bg-orange-400",
      description: "Fiery and passionate spirit",
      gradientClass: "gradient-bg-7"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Welcome section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-pink-500" />
            <h2 className="text-4xl font-bold text-gray-800">Meet Our Amazing Friends!</h2>
            <Sparkles className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to our special corner of the internet! Click on any friend's card to explore their unique world 
            and discover what makes them special. 💫
          </p>
        </div>

        {/* Friends grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {friends.map((friend) => (
            <FriendCard key={friend.name} {...friend} />
          ))}
        </div>

        {/* Fun stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-pink-500">7</div>
            <div className="text-sm text-gray-600">Amazing Friends</div>
          </div>
          <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-500">∞</div>
            <div className="text-sm text-gray-600">Memories Shared</div>
          </div>
          <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-500">100%</div>
            <div className="text-sm text-gray-600">Fun Guaranteed</div>
          </div>
          <div className="text-center p-4 bg-white/60 rounded-xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-500">1</div>
            <div className="text-sm text-gray-600">Friend Zone</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
