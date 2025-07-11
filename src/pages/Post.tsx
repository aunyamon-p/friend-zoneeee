
import ProfileLayout from '@/components/ProfileLayout';
import ContentSection from '@/components/ContentSection';
import { Palette, Camera, Brush, Lightbulb } from 'lucide-react';

const Post = () => {
  return (
    <ProfileLayout name="Post" emoji="🎨" gradientClass="gradient-bg-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <ContentSection title="Creative Soul" className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl">
              🎨
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Artist & Designer</h3>
              <p className="text-gray-600">Turning imagination into reality, one creation at a time!</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Hey! I'm Post, and I see the world through a kaleidoscope of colors and possibilities. Art isn't just what I do - 
            it's who I am. Whether it's digital design, traditional painting, or finding beauty in everyday moments, 
            I believe creativity is the language of the soul. Let's paint the world more beautiful together! 🎨
          </p>
        </ContentSection>

        <ContentSection title="My Art Arsenal">
          <div className="space-y-3">
            {[
              { icon: "🖌️", text: "Digital illustration & design" },
              { icon: "📐", text: "UI/UX design projects" },
              { icon: "🎭", text: "Traditional watercolor painting" },
              { icon: "📱", text: "Social media graphics" },
              { icon: "🖼️", text: "Photo editing & manipulation" },
              { icon: "✏️", text: "Sketching & concept art" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Creative Vibes">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg p-4 text-center">
              <Palette className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-blue-800">Color Theory</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-200 to-blue-200 rounded-lg p-4 text-center">
              <Camera className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-sm text-blue-800">Visual Stories</p>
            </div>
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg p-4 text-center">
              <Brush className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm text-blue-800">Traditional Art</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-200 to-blue-200 rounded-lg p-4 text-center">
              <Lightbulb className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <p className="text-sm text-blue-800">Big Ideas</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Artist's Inspiration" className="lg:col-span-2">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-6 border-l-4 border-blue-400">
            <blockquote className="text-lg italic text-gray-700 mb-2">
              "Art enables us to find ourselves and lose ourselves at the same time. Every stroke tells a story, every color holds an emotion! 🎨💙"
            </blockquote>
            <cite className="text-blue-600 font-medium">- Post's creative mantra</cite>
          </div>
        </ContentSection>

      </div>
    </ProfileLayout>
  );
};

export default Post;
