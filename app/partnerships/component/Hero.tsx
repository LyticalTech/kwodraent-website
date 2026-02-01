'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/Container';

const slides = [
  {
    id: 'solar',
    name: 'Solar',
    image: '/safety.avif',
    title: 'Gretta',
    companyTitle: 'Hotel Group',
    desc: 'Reduced electricity costs dramatically with 1.2 MW of rooftop solar. Guests love staying at an eco-friendly hotel.',
  },
  {
    id: 'wind',
    name: 'Wind',
    image: '/OILRIG.avif',
    title: 'Career',
    companyTitle: 'Shopping Center',
    desc: 'Achieved energy independence with 2 MW of solar panels. Now generating more clean energy than they use.',
  },
  {
    id: 'storage',
    name: 'Storage',
    image: '/mountain.avif',
    title: 'Chema',
    companyTitle: 'Manufacturing Facility',
    desc: 'Strategic 9.8 MW installation across 11 buildings maximized energy production, space efficiency and clean energy.',
  },
  {
    id: 'grid',
    name: 'Grid',
    image: '/roofsolar.avif',
    title: 'ALL RENO',
    companyTitle: 'Residential',
    desc: 'Solar covers 90% of our electricity needs. Even with kids using more devices, our bills stay low.',
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length); // loop back to 0
    }, 5000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className='w-full bg-white py-12'>
      <Container>
        <h1 className='flex items-center gap-3 text-base text-black mb-6'>
          <span className='inline-block w-4 h-0.5 bg-blue-500' />
          Sustainability
        </h1>

        <div className='flex flex-col w-full items-start gap-4'>
          <h2 className='text-black text-6xl'>Partnerships</h2>
          <p className='text-black text-base'>
            Kwo Draent is committed to blah blah blah partnerships.
          </p>
        </div>

        {/* SLIDER */}
        <div className='relative w-full overflow-hidden mt-12'>
          <div
            className='flex transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className='relative w-full h-[480px] shrink-0'
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className='object-cover rounded-4xl'
                />
                <div className='absolute inset-0 flex items-center justify-end px-6 md:px-16'>
                  <div className='bg-white max-w-md p-8 rounded-2xl shadow-xl'>
                    <h1 className='text-2xl font-bold text-black mb-2'>
                      {slide.title}
                    </h1>
                    <h2 className='text-black text-sm mb-4'>
                      {slide.companyTitle}
                    </h2>
                    <p className='text-black text-base'>{slide.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SELECTOR */}
        <div className='w-full flex items-center justify-center mt-10 gap-6'>
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActive(index)}
              className={`flex w-100 flex-col items-center text-sm font-semibold transition border-b-2 pb-1 ${
                active === index
                  ? 'text-blue-600 border-black'
                  : 'text-gray-400 hover:text-blue-600 border-transparent'
              }`}
            >
              <h1
                className={`text-xl transition-colors ${
                  active === index ? 'text-black' : 'text-gray-400'
                }`}
              >
                {slide.title}
              </h1>
              
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
