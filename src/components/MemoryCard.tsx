import React, { useState } from 'react';

interface MemoryCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  index: number;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ title, date, description, imageUrl, index }) => {
  const [flipped, setFlipped] = useState(false);
  
  return (
    <div 
      className={`memory-card relative h-80 w-full sm:w-64 m-4 cursor-none perspective-1000 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="y2k-card h-full flex flex-col justify-between">
            <div className="polaroid-container bg-white p-3 shadow-lg">
              <div className="polaroid-image h-40 overflow-hidden">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="polaroid-caption mt-2 text-center text-black">
                <p className="font-pixel text-sm">{title}</p>
                <p className="text-xs text-gray-500">{date}</p>
              </div>
            </div>
            <div className="text-center mt-2">
              <p className="text-xs text-[#33ffcc]">Click to flip</p>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="y2k-card h-full flex flex-col justify-between p-4">
            <h3 className="text-[#ff66c4] font-bold text-lg">{title}</h3>
            <p className="text-[#33ffcc] text-sm">{date}</p>
            <p className="text-white text-sm mt-2">{description}</p>
            <div className="text-center mt-auto">
              <p className="text-xs text-[#33ffcc]">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for 3D effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default MemoryCard;