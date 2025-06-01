import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import StarBackground from '../components/StarBackground';
import ScrollAnimation from '../components/ScrollAnimation';
import MemoryCard from '../components/MemoryCard';

// Sample memory data - replace with your actual memories
const memories = [
  {
    id: 1,
    title: 'First Date',
    date: 'June 6, 2023',
    description: 'Our first date down at JUHU BEACH. You were wearing that blue dress I love so much. We were so shyy and I knew then that you were special.',
    imageUrl: '/assets/IMG_8023.jpg'
  },
  {
      id: 2,
      title: 'FaceTime Masti',
      date: 'March 20, 2024',
      description: 'When Both the Houses are Safe... neither your Mom OR Mine, then the Facetime Bakchodi starts.',
      imageUrl: '/assets/IMG_5664.png'
    },
    {
      id: 3,
      title: 'College Masti',
      date: 'August 10, 2023',
      description: 'Full College Masti, Bakchodi and Missing lectures.',
      imageUrl: '/assets/IMG_8448.jpg'
    },
  {
    id: 4,
    title: 'Everyday Beaches',
    date: 'Aug 24, 2023',
    description: 'Everyday Morning we went to beaches coz we both love it. Haha',
    imageUrl: '/assets/IMG_9229.jpg'
  },
  {
    id: 5,
    title: 'Your First Birthday (W me Obv)',
    date: 'October 11, 2023',
    description: 'I still remember how you were so excited to see me on your birthday. I was so nervous but you made me feel so special. I bought you Flowers which you loved it and we clicked so many pictures on Dazz Cam, and my Camera',
    imageUrl: '/assets/IMG_1378.jpg'
  },
  {
    id: 6,
    title: 'Our first Navratri',
    date: 'October 20, 2023',
    description: 'We went to Navratri Together you wore yelllow ghagra and you didnt know how to do garba Haha.',
    imageUrl: '/assets/IMG_1766.jpg'
  },
  {
    id: 7,
    title: 'Traditionalsss!',
    date: 'February 7, 2024',
    description: 'Seeing you that day I was like JUST WOW.. What did i get my eyes blessed with ...sobs ;)',
    imageUrl: '/assets/IMG_4635.jpg'
  },
  {
    id: 8,
    title: 'First Trip',
    date: 'May 12, 2024',
    description: 'Our first trip together. To Dawrka and Somnath with my Family and your mom.. One of the best Moments of my life.',
    imageUrl: '/assets/IMG_6385.jpg'
  },
];

const MemoriesPage: React.FC = () => {
  useEffect(() => {
    // Update title
    document.title = "Our Timeline | Y2K Anniversary";
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-10 relative">
      <StarBackground />
      <div className="scan-lines"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn">
          <h1 className="y2k-title text-4xl md:text-5xl text-center mb-10 font-bold">OUR TIMELINE</h1>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={300}>
          <div className="flex items-center justify-center mb-12">
            <Calendar className="h-6 w-6 text-[#ff66c4] mr-2" />
            <p className="text-center text-[#33ffcc] text-lg max-w-2xl">
              A chronological journey through the moments that defined our love story.
            </p>
          </div>
        </ScrollAnimation>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#ff66c4] via-[#6666ff] to-[#33ffcc] h-full"></div>

          <div className="relative">
            {memories.map((memory, index) => (
              <div key={memory.id} className="mb-24">
                <ScrollAnimation
                  animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                  delay={index * 150}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                      <MemoryCard
                        title={memory.title}
                        date={memory.date}
                        description={memory.description}
                        imageUrl={memory.imageUrl}
                        index={index}
                      />
                    </div>

                    <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#33ffcc] border-4 border-[#000033]"></div>

                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8 text-left' : 'md:pr-8 text-right'} mt-4 md:mt-0`}>
                      <h3 className="text-[#ff66c4] text-xl font-bold">{memory.date}</h3>
                      <p className="text-white mt-2">{memory.title}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;
