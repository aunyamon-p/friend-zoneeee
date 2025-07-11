
import { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 mb-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-pink-200">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default ContentSection;
