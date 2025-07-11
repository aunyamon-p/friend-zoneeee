
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Sun, Smile, Zap, Coffee } from 'lucide-react';

const Aomjai = () => {
  return (
    <ProfileLayout name="Aomjai" emoji="´ސު｀" gradientClass="gradient-bg-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="‧₊˚ ☁️⋅ about me ₊˚ෆ" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://i.pinimg.com/1200x/c8/f4/28/c8f4282ac48f913a536a8262e99c5d81.jpg" 
              alt="Profile of Aomjai"
              className="w-16 h-16 rounded-full object-cover border-2 border-yellow-300"
            />
            <div>
              <h3 className="text-xl font-semibold text-yellow-600">Chatkeaw Aupakhort</h3>
              <p className="text-gray-600"> Girl gamer not programmer </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hello everyone! I'm Aomjai, gamer by passion , music lover by mood , napper by nature 
            if I'm not online, I'm probably asleep no promises  ╯ 3 ╰  
          </p>
        </ContentSection>

        <ContentSection title="🖍️ My favorite by myself ⭐️ ">
          <div className="space-y-3">
            {[
              { icon: "🍽", text: "Sushiro | Hotpot Man | Sour Stuff " },
              { icon: "🎮", text: "GTA | Valorant | Roblox" },
              { icon: "🎧", text: "Rap | R&B | Acoustic" },
              { icon: "📍", text: "Disneyland | Universal | Sapa" },
              { icon: "📺", text: "Katekyo Hitman Reborn! | SpongeBob SquarePants | Kureyon Shinchan" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="ෆ ꕀ My Gallery ꕀ´ˎ˗ ">
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "https://i.pinimg.com/1200x/2f/f1/22/2ff122d086ab37af55b659f256debb55.jpg", caption: "˗ˏˋ Quip ´ˎ˗" },
              { src: "https://i.pinimg.com/1200x/31/c0/d2/31c0d285e37ce4b9592d17a78549db59.jpg", caption: "˗ˏˋ Outfit ´ˎ˗" },
              { src: "https://i.pinimg.com/736x/77/f7/ea/77f7ea6b280770cffeab5063e11167ac.jpg", caption: "˗ˏˋ Best friend ´ˎ˗" },
              { src: "https://i.pinimg.com/736x/10/cb/da/10cbda4648c533ee443221f081027cc8.jpg", caption: "˗ˏˋ Status ´ˎ˗" },
            ].map((item, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
                <img src={item.src} alt={item.caption} className="w-full h-32 object-cover" />
                <p className="text-sm text-center text-yellow-800 bg-yellow-50 py-2">{item.caption}</p>
              </div>
            ))}
          </div>
        </ContentSection>
        
        <ContentSection title="꒰ My daily note ꒱" className="lg:col-span-2">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border-l-4 border-yellow-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "ฝันให้ไกล ไปให้พ้น"
            </blockquote>
            <cite className="text-yellow-600 font-medium">Aomjai's daily 11/7/2025</cite>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Aomjai;