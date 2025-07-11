
import { useState } from 'react';
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Snowflake, Mountain, Wind, Waves } from 'lucide-react';

const Ice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const profileImageUrl = "/iceprofile.png"; 

  return (
    <ProfileLayout name="Ice" emoji="❄️" gradientClass="gradient-bg-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="About Me 📝" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            {/* รูปโปรไฟล์ขนาดเล็ก */}
            <img 
              src={profileImageUrl}
              alt="profile picture" 
              className="w-16 h-16 rounded-full object-cover cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />

            <div>
              <h3 className="text-xl font-semibold text-cyan-600">Thanatchaphon Rangdee</h3>
              <p className="text-gray-600">Artificial Intelligence Engineering and Data Science, Bangkok University 🏫</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            ฮายฮาย ! เราไอซ์ ❄️ แต่เพื่อนส่วนใหญ่เรียกว่า "ธนัช" (ice is too basic) เป็น introvert ที่ friendly นะ ถ้าคลิกกันคือคุยยาวแน่นอน 💬 ว่างเมื่อไหร่ก็ชอบทำอาหาร 🍳 
          </p>
          <p className="text-gray-700 leading-relaxed">
            หรือไม่ก็ดูซีรีส์ยาว ๆ 🎬 ส่วนสิ่งที่ฮีลใจเราได้ดีที่สุดก็คือ K-pop วงที่ตามอยู่ตอนนี้มี Treasure 🩵 กับ NCT 💚 ใครสนใจอยากไปคอนด้วยกัน DM มาได้เลยนะ 🌟
          </p>
        
        </ContentSection>

        {/* ✅ Modal แสดงรูปใหญ่เมื่อคลิก */}
        {isModalOpen && (
          <div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <img 
              src={profileImageUrl} 
              alt="Thanatchaphon Large" 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        )}

        <ContentSection title="Favorites & Faves 💖">
          <div className="space-y-3">
            {[
              { icon: "🎧", text: "Raincouver - MARK" },
              { icon: "🎬", text: "About Time" },
              { icon: "🍜", text: "Tomyum Chasyumen" },
              { icon: "🌊", text: "Ocean waves & beach walks" },
              { icon: "🌧️", text: "Being cozy in bed with the sound of rain" },
              { icon: "📸", text: "Capturing quiet moments through my camera" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Life Motto ✨">
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl p-6 border-l-4 border-cyan-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "I'll leave tomorrow's problems to tomorrow's me."
            </blockquote>
            <cite className="text-cyan-600 font-medium">- Saitama (One-Punch Man)</cite> 
          </div>  
        </ContentSection>

        <ContentSection title="Let’s Connect 🤝" className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-pink-200 to-pink-400 rounded-xl p-6 border-l-4 border-pink-500 text-center">
              <p className="text-lg font-semibold mb-2">📸 Instagram</p>
              <a 
                href="https://www.instagram.com/_tanatt/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-mono cursor-pointer bg-pink-100 px-3 py-1 rounded inline-block break-words transition-colors duration-200 hover:bg-pink-200"
              >
                _tanatt
              </a>
            </div>


            {/* Discord Card */}
            <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-xl p-6 border-l-4 border-blue-500 text-center">
              <p className="text-lg font-semibold mb-2">💬 Discord</p>
              <span className="font-mono bg-blue-100 px-3 py-1 rounded inline-block break-words">
                jjajang_23
              </span>
            </div>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Ice;
