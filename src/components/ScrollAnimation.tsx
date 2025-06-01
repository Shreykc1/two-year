import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'glitch';
  delay?: number;
  threshold?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation,
  delay = 0,
  threshold = 0.1
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add('animated');
            }, delay);
            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, threshold]);
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeIn':
        return 'opacity-0 transition-opacity duration-1000 ease-in-out';
      case 'slideUp':
        return 'opacity-0 translate-y-10 transition-all duration-1000 ease-in-out';
      case 'slideLeft':
        return 'opacity-0 translate-x-10 transition-all duration-1000 ease-in-out';
      case 'slideRight':
        return 'opacity-0 -translate-x-10 transition-all duration-1000 ease-in-out';
      case 'scale':
        return 'opacity-0 scale-95 transition-all duration-1000 ease-in-out';
      case 'glitch':
        return 'opacity-0 transition-opacity duration-500 ease-in-out hover-glitch';
      default:
        return '';
    }
  };
  
  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()}`}
      style={{
        willChange: 'opacity, transform'
      }}
    >
      <style jsx>{`
        .animated {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

export default ScrollAnimation;