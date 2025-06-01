import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Image, Calendar, Mail, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-[#000033]/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="y2k-text text-xl font-bold hover-glitch">2 YEARS</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#ff66c4] ${
                  location.pathname === '/' ? 'text-[#33ffcc]' : 'text-white'
                }`}
              >
                <Heart className="mr-1 h-4 w-4" />
                <span>Home</span>
              </Link>

              <Link
                to="/gallery"
                className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#ff66c4] ${
                  location.pathname === '/gallery' ? 'text-[#33ffcc]' : 'text-white'
                }`}
              >
                <Image className="mr-1 h-4 w-4" />
                <span>Gallery</span>
              </Link>

              <Link
                to="/memories"
                className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#ff66c4] ${
                  location.pathname === '/memories' ? 'text-[#33ffcc]' : 'text-white'
                }`}
              >
                <Calendar className="mr-1 h-4 w-4" />
                <span>Memories</span>
              </Link>

              <Link
                to="/love-letter"
                className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#ff66c4] ${
                  location.pathname === '/love-letter' ? 'text-[#33ffcc]' : 'text-white'
                }`}
              >
                <Mail className="mr-1 h-4 w-4" />
                <span>Love Letter</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="y2k-button p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-0 z-50 w-full bg-[#000033]/95 backdrop-blur-lg`}
      >
        <div className="pt-20 pb-3 space-y-1 px-4">
          <Link
            to="/"
            className={`block px-3 py-4 rounded-md text-base font-medium transition-all duration-300 ${
              location.pathname === '/' ? 'text-[#33ffcc]' : 'text-white'
            }`}
          >
            <Heart className="inline mr-2 h-5 w-5" />
            <span>Home</span>
          </Link>

          <Link
            to="/gallery"
            className={`block px-3 py-4 rounded-md text-base font-medium transition-all duration-300 ${
              location.pathname === '/gallery' ? 'text-[#33ffcc]' : 'text-white'
            }`}
          >
            <Image className="inline mr-2 h-5 w-5" />
            <span>Gallery</span>
          </Link>

          <Link
            to="/memories"
            className={`block px-3 py-4 rounded-md text-base font-medium transition-all duration-300 ${
              location.pathname === '/memories' ? 'text-[#33ffcc]' : 'text-white'
            }`}
          >
            <Calendar className="inline mr-2 h-5 w-5" />
            <span>Memories</span>
          </Link>

          <Link
            to="/love-letter"
            className={`block px-3 py-4 rounded-md text-base font-medium transition-all duration-300 ${
              location.pathname === '/love-letter' ? 'text-[#33ffcc]' : 'text-white'
            }`}
          >
            <Mail className="inline mr-2 h-5 w-5" />
            <span>Love Letter</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
