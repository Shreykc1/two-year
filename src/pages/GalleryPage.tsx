import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import StarBackground from '../components/StarBackground';
import ScrollAnimation from '../components/ScrollAnimation';

// Sample gallery data - replace with your actual images
const galleryImages = [
  {
    id: 1,
    url: '/assets/IMG_1378.jpg',
    title: 'Colaba',
    description: 'Timepass Moj Masti.'
  },
  {
    id: 2,
    url: '/assets/IMG_6477.jpg',
    title: 'Science Center (ZOO)',
    description: 'Just Where she belongs...'
  },
  {
    id: 3,
    url: '/assets/IMG_9137.jpg',
    title: 'Under the Stars',
    description: 'Mesmerising Init.'
  },
  {
    id: 4,
    url: '/assets/IMG_0852.jpg',
    title: 'Concert',
    description: 'Kshitij bolteee... haa bhai theeke dahisar nikal gyi meri bas.'
  },
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update title
    document.title = "Photo Gallery | Y2K Anniversary";

    // Simulate loading images
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen pt-20 pb-10 relative">
      <StarBackground />
      <div className="scan-lines"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn">
          <h1 className="y2k-title text-4xl md:text-5xl text-center mb-10">OUR GALLERY</h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={300}>
          <p className="text-center text-[#33ffcc] text-lg mb-12 max-w-2xl mx-auto">
            A collection of our favorite moments together, frozen in time like the Y2K bug never happened.
          </p>
        </ScrollAnimation>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="h-12 w-12 text-[#ff66c4] animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <ScrollAnimation key={image.id} animation="fadeIn" delay={index * 150}>
                <div
                  className="y2k-card overflow-hidden cursor-none transform hover:scale-103 transition-transform duration-300"
                  onClick={() => openModal(image)}
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#ff66c4] font-bold">{image.title}</h3>
                    <p className="text-sm text-white mt-1">{image.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl w-full y2k-card p-0 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain"
            />
            <div className="p-6">
              <h3 className="text-[#ff66c4] text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-white mt-2">{selectedImage.description}</p>
              <button
                className="y2k-button mt-4"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
