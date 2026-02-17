'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/Container';
import { 
  ArrowUpRight, 
  Box, 
  Truck, 
  HardDrive, 
  Anchor
} from 'lucide-react';

const guidelines = [
  {
    id: 1,
    title: 'Code of Conduct',
    image: '/assets/Hero image.png',
    heading: 'Code of Conduct',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    
  },
  {
    id: 2,
    title: 'Ethics & Compliance Program',
    image: '/assets/KD group 1.png',
    heading: 'Warehousing',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    
  },
  {
    id: 3,
    title: 'Terms and Conditions ',
    image: '/assets/KD group 3.png',
    heading: 'Door-to-Door Delivery',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    
  },
  {
    id: 4,
    title: 'Marine Services',
    image: '/assets/KD group 7.jpg',
    heading: 'Ocean Freight',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    
  },
];

const RulesSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % guidelines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleClick = (index: number) => {
    setActive(index);
    setPaused(true);
  };

  return (
    <section className='py-6 bg-white'>
      <Container>

        {/* TOP TABS */}
        <div className='w-full border-b border-gray-200'>
          <div className='grid grid-cols-2 md:grid-cols-4'>
            {guidelines.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleClick(index)}
                className='flex flex-col items-center justify-center py-6 px-4 relative group cursor-pointer'
              >
                <h4 className={`font-semibold text-sm transition ${active === index ? 'text-black' : 'text-gray-400'}`}>
                  {item.title}
                </h4>

                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-full transition-all duration-500
                  ${active === index ? 'bg-blue-600' : 'bg-gray-300 group-hover:bg-blue-400'}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className='mt-20 grid md:grid-cols-12 gap-8 items-start'>
          
          {/* IMAGE */}
          <div className='relative h-[350px] w-full overflow-hidden  md:col-span-7'>
            <AnimatePresence mode='wait'>
              <motion.img
                key={guidelines[active].image}
                src={guidelines[active].image}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className='absolute w-full h-full object-cover'
              />
            </AnimatePresence>
          </div>

          {/* TEXT */}
          <div className='flex flex-col items-start gap-6 md:col-span-5'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className='flex flex-col gap-6'
              >
                <div className='flex items-start gap-3'>
                 

                  <h2 className='text-2xl md:text-4xl  text-black'>
                    {guidelines[active].heading}
                  </h2>
                </div>

                <p className='text-gray-600 leading-relaxed'>{guidelines[active].desc}</p>


              
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default RulesSection;
