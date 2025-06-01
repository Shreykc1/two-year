import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      
      // Add new position to trail and keep only the last 5
      setTrailPositions(prev => {
        const newPositions = [...prev, { x: e.clientX, y: e.clientY }];
        if (newPositions.length > 5) {
          return newPositions.slice(newPositions.length - 5);
        }
        return newPositions;
      });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div 
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background: 'rgba(51, 255, 204, 0.7)',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 10px rgba(51, 255, 204, 0.7)',
          opacity: hidden ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Cursor trails */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="fixed w-3 h-3 rounded-full pointer-events-none"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            background: 'rgba(255, 102, 196, 0.3)',
            transform: 'translate(-50%, -50%)',
            opacity: hidden ? 0 : (index / trailPositions.length) * 0.8,
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}
    </>
  );
};

export default Cursor;