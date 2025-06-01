import React, { useEffect, useState } from 'react';
import { Mail, Heart } from 'lucide-react';
import StarBackground from '../components/StarBackground';
import ScrollAnimation from '../components/ScrollAnimation';
import TypewriterEffect from '../components/TypewriterEffect';

const LoveLetterPage: React.FC = () => {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    // Update title
    document.title = "Love Letter | Y2K Anniversary";
  }, []);

  const handleOpenLetter = () => {
    setShowLetter(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 relative">
      <StarBackground />
      <div className="scan-lines"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn">
          <h1 className="y2k-title text-4xl md:text-5xl text-center mb-10">LOVE LETTER</h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={300}>
          <div className="flex items-center justify-center mb-12">
            <Mail className="h-6 w-6 text-[#ff66c4] mr-2" />
            <p className="text-center text-[#33ffcc] text-lg max-w-2xl">
              A special message for our two-year anniversary.
            </p>
          </div>
        </ScrollAnimation>

        {!showLetter ? (
          <ScrollAnimation animation="scale" delay={600}>
            <div className="y2k-card max-w-lg mx-auto text-center p-10">
              <div className="y2k-gradient p-1 rounded-full inline-block mb-6">
                <div className="bg-[#000033] p-3 rounded-full">
                  <Heart className="h-10 w-10 text-[#ff66c4]" />
                </div>
              </div>

              <h2 className="text-[#ff66c4] text-2xl mb-6">A Special Message</h2>
              <p className="text-white mb-8">
                Click below to open a love letter I've written especially for you on our 2-year anniversary.
              </p>

              <button
                className="y2k-button mx-auto"
                onClick={handleOpenLetter}
              >
                Open Letter
              </button>
            </div>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation animation="fadeIn">
            <div className="y2k-card max-w-2xl mx-auto p-8 md:p-10">
              <div className="mb-6 text-center">
                <h2 className="text-[#ff66c4] text-2xl mb-2">My Dearest,</h2>
                <p className="text-[#33ffcc] text-sm">June 1, 2025</p>
              </div>

              <div className="space-y-4 text-white">
                <TypewriterEffect
                  text="Two years ago, my life changed forever when you came into it. What started as a chance encounter has blossomed into the most beautiful relationship I could have ever imagined."
                  speed={20}
                  className="block mb-4"
                />

                <TypewriterEffect
                  text="Through every laugh, every tear, every adventure, and every quiet moment, you've been my constant. Your smile still makes my heart skip a beat, just like it did on our first date."
                  speed={20}
                  delay={8000}
                  className="block mb-4"
                />

                <TypewriterEffect
                  text="You've taught me what it means to truly love someone - to see their flaws and love them not despite those flaws, but because of them. You've shown me patience when I needed time, strength when I felt weak, and unwavering support through all of life's challenges."
                  speed={20}
                  delay={16000}
                  className="block mb-4"
                />

                <TypewriterEffect
                  text="As we celebrate two years together, I want you to know that this is just the beginning. I look forward to creating countless more memories, facing whatever challenges life throws our way, and building our future together."
                  speed={20}
                  delay={26000}
                  className="block mb-4"
                />

                <TypewriterEffect
                  text="Thank you for being you. Thank you for loving me. Here's to us and to many more anniversaries to come."
                  speed={20}
                  delay={34000}
                  className="block mb-4"
                />

                <TypewriterEffect
                  text="Forever yours,"
                  speed={40}
                  delay={40000}
                  className="block mt-8"
                />

                <TypewriterEffect
                  text="Shreyu"
                  speed={40}
                  delay={42000}
                  className="block y2k-text text-xl"
                />
              </div>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </div>
  );
};

export default LoveLetterPage;
