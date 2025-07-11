
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Heart, Star, Camera, Music } from 'lucide-react';

const Fai = () => {
  return (
    <ProfileLayout name="Fai" emoji="🔥" gradientClass="gradient-bg-7">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* About Me */}
        <ContentSection title="เกี่ยวกับฉัน">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=face" />
              <AvatarFallback className="text-2xl bg-orange-100">🔥</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Fai</h3>
              <p className="text-orange-600">Fiery and Passionate</p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            สวัสดี! ฉันชื่อฝ้าย คนที่มีพลังไฟและความหลงใหลในสิ่งต่างๆ มากมาย 
            ชอบทำสิ่งใหม่ๆ ผจญภัยและสำรวจโลกใบใหญ่ ทุกวันของฉันเต็มไปด้วยสีสันและความตื่นเต้น! 🌟
          </p>
        </ContentSection>

        {/* Interests */}
        <ContentSection title="สิ่งที่ชอบ">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-orange-500" />
              <span>ถ่ายรูป</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="h-5 w-5 text-orange-500" />
              <span>ฟังเพลง</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-orange-500" />
              <span>ทำอาหาร</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-orange-500" />
              <span>เดินทาง</span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">อาหารรสจัด</Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">เสื้อผ้าสีแดง</Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">ดูหนังแอคชั่น</Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">กีฬาเอ็กซ์ตรีม</Badge>
          </div>
        </ContentSection>

        {/* Favorite Quote */}
        <ContentSection title="คำคมที่ชอบ" className="lg:col-span-2">
          <blockquote className="text-center p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
            <p className="text-xl text-gray-700 italic mb-4">
              "ไฟที่ลุกโชนในใจคือพลังที่ทำให้เราก้าวไปข้างหน้าได้"
            </p>
            <cite className="text-orange-600 font-semibold">- ฝ้าย</cite>
          </blockquote>
        </ContentSection>

        {/* Gallery Preview */}
        <ContentSection title="ช่วงเวลาดีๆ" className="lg:col-span-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏔️</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🍛</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-red-200 to-pink-200 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🎸</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-orange-200 to-yellow-200 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✈️</span>
            </div>
          </div>
        </ContentSection>
      </div>
    </ProfileLayout>
  );
};

export default Fai;
