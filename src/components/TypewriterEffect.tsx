import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 50,
  delay = 1000,
  loop = false,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
      } else {
        setIsTyping(false);
        if (loop) {
          timeout = setTimeout(() => {
            setDisplayText('');
            setCurrentIndex(0);
            setIsTyping(true);
          }, delay);
        }
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, isTyping, loop, speed, text]);
  
  return (
    <div className={`inline-block ${className}`}>
      {displayText}<span className="blinking-cursor">|</span>
      <style jsx>{`
        .blinking-cursor {
          animation: blink-animation 1s steps(2, start) infinite;
        }
        @keyframes blink-animation {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </div>
  );
};

export default TypewriterEffect;