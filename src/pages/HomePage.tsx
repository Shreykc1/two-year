import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import StarBackground from '../components/StarBackground';
import ScrollAnimation from '../components/ScrollAnimation';
import TypewriterEffect from '../components/TypewriterEffect';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update title
    document.title = "2 Years Together | Y2K Anniversary";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarBackground />
      <div className="scan-lines"></div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
        <ScrollAnimation animation="fadeIn">
          <h1 className="y2k-title text-4xl md:text-6xl mb-4 mt-20">
            2 YEARS TOGETHER <br/>  <span className='y2k-title text-2xl'>Monica and Shrey</span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={300}>
          <div className="mb-8">
            <TypewriterEffect
              text="A journey through our memories..."
              speed={70}
              className="text-xl md:text-2xl text-[#33ffcc]"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeIn" delay={1000}>
          <div className="y2k-gradient p-1 rounded-full inline-block mb-10">
            <div className="bg-[#000033] p-4 rounded-full">
              <Heart className="h-16 w-16 md:h-24 md:w-24 text-[#ff66c4]" />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={1500}>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/gallery" className="y2k-button">
              View Gallery
            </Link>
            <Link to="/memories" className="y2k-button">
              Our Timeline
            </Link>
            <Link to="/love-letter" className="y2k-button">
              Love Letter
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeIn">
            <h2 className="y2k-title text-3xl md:text-4xl mb-10 text-center">OUR STORY</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollAnimation animation="slideLeft" delay={300}>
              <div className="y2k-card">
                <h3 className="text-[#ff66c4] text-xl mb-4">How We Met</h3>
                <p className="text-white mb-4">
                  Two years ago, our paths crossed in the most unexpected way.
                  What started as a chance encounter blossomed into the most
                  beautiful relationship I could have ever imagined.
                </p>
                <p className="text-[#33ffcc]">
                  Every moment since then has been a treasure.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideRight" delay={600}>
              <div className="y2k-card">
                <h3 className="text-[#ff66c4] text-xl mb-4">Why I Love You</h3>
                <p className="text-white mb-4">
                  Your smile brightens my darkest days. Your laugh is my favorite
                  melody. Your heart, the most precious gift I've ever received.
                </p>
                <p className="text-[#33ffcc]">
                  You make every day an adventure worth living.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fadeIn" delay={900}>
            <div className="text-center mt-16">
              <p className="text-white text-lg mb-6">
                Two years may seem like just a moment in the grand scheme of things,
                but they've been the most beautiful moments of my life.
              </p>
              <Link to="/memories" className="y2k-button">
                Explore Our Journey
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
