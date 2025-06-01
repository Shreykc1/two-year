import React, { useEffect } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';

const SurprisePage: React.FC = () => {
    useEffect(() => {
        document.title = "A Special Surprise | Y2K Anniversary";
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#000033] to-[#000066] relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`
                        }}
                    >
                        <div className="w-2 h-2 bg-[#ff66c4] rounded-full opacity-30" />
                    </div>
                ))}
            </div>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
                {/* Animated Tulip */}
                <div className="relative w-64 h-96">
                    <div className="tulip-container">
                        {/* Tulip Stem */}
                        <div className="absolute bottom-0 left-1/2 w-1 h-48 bg-gradient-to-t from-[#33ffcc] to-[#6666ff] transform -translate-x-1/2" />

                        {/* Tulip Petals */}
                        <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2">
                            <div className="tulip-petal petal-1" />
                            <div className="tulip-petal petal-2" />
                            <div className="tulip-petal petal-3" />
                            <div className="tulip-petal petal-4" />
                        </div>

                        {/* Tulip Center */}
                        <div className="absolute bottom-48 left-1/2 w-8 h-8 bg-[#ff66c4] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>
                </div>

                {/* Message */}
                <ScrollAnimation animation="fadeIn" delay={1000}>
                    <div className="text-center md:text-left max-w-md">
                        <h1 className="y2k-title text-4xl md:text-5xl mb-6">
                            For You, Bebu
                        </h1>
                        <p className="text-xl text-[#33ffcc] mb-4 font-['Pixel']">
                            Like this tulip that blooms with love,
                            <br />
                            my heart opens for you every day.
                        </p>
                        <p className="text-lg text-[#ff66c4] font-['Pixel']">
                            Forever yours,
                            <br />
                            With all my love ❤️
                        </p>
                    </div>
                </ScrollAnimation>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }

        .tulip-container {
          animation: bloom 2s ease-out forwards;
          transform-origin: bottom center;
        }

        @keyframes bloom {
          0% { transform: scale(0.3); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .tulip-petal {
          position: absolute;
          width: 40px;
          height: 60px;
          background: linear-gradient(to bottom, #ff66c4, #ff99dd);
          border-radius: 50% 50% 0 50%;
          transform-origin: bottom center;
          animation: petalBloom 2s ease-out forwards;
          opacity: 0;
        }

        .petal-1 { transform: rotate(0deg); animation-delay: 0.2s; }
        .petal-2 { transform: rotate(90deg); animation-delay: 0.4s; }
        .petal-3 { transform: rotate(180deg); animation-delay: 0.6s; }
        .petal-4 { transform: rotate(270deg); animation-delay: 0.8s; }

        @keyframes petalBloom {
          0% {
            transform: rotate(var(--rotation)) scale(0);
            opacity: 0;
          }
          100% {
            transform: rotate(var(--rotation)) scale(1);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
};

export default SurprisePage;
