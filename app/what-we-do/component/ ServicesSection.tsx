'use client';
import React from 'react';
import { useEffect, useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/Container';
import { 
  ArrowUpRight, 
  Box, 
  Truck, 
  HardDrive, 
  Anchor, 
  HardHat, 
  Users, 
  Hammer 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Code of Conduct',
    image: '/assets/Hero image.png',
    heading: 'Code of Conduct',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    icon: Box, // example icon
  },
  {
    id: 2,
    title: 'Ethics & Compliance Program',
    image: '/assets/KD group 1.png',
    heading: 'Ethics & Compliance Program',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    icon: HardDrive,
  },
  {
    id: 3,
    title: 'Terms and Conditions ',
    image: '/assets/KD group 3.png',
    heading: 'Terms and Conditions ',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    icon: Truck,
  },
  {
    id: 4,
    title: 'Marine Services',
    image:' /assets/KD group 7.jpg',
    heading: 'Marine Services',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    icon: Anchor,
  },
  {
    id: 5,
    title: 'Drilling',
    image: '/assets/KD group 1.png',
    heading: 'Warehousing',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    icon: HardHat,
  },
  {
    id: 6,
    title: 'Project Management',
    image: '/assets/KD group 3.png',
    heading: 'Warehousing',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    icon: HardHat,
  },
  {
    id: 7,
    title: 'Manpower & Training',
    image: ' /assets/KD group 7.jpg',
    heading: 'Door-to-Door Delivery',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    icon: Users,
  },
  {
    id: 8,
    title: 'Fabrication',
    image: ' /KD group 2.webp',
    heading: 'Ocean Freight',
    desc: 'Efficiently moving businesses forward: our seamless land transport solutions redefine reliability and convenience.',
    icon: Hammer,
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // auto switch
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleClick = (index: number) => {
    setActive(index);
    setPaused(true); // pause auto when user clicks
  };

  return (
    <section className='py-6 bg-white'>
      <Container>
        {/* ================= TOP TABS ================= */}
        <div className='w-full border-b border-gray-200'>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
            {services.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleClick(index)}
                className='flex flex-col items-center justify-center py-6 px-4 relative group cursor-pointer'
              >
                <h4 className={`font-bold text-sm transition ${active === index ? 'text-black' : 'text-gray-400'}`}>
                  {item.title}
                </h4>

                {/* indicator */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-full 
                  transition-all duration-500 ease-out
                  ${active === index ? 'bg-blue-600' : 'bg-gray-300 group-hover:bg-blue-400'}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className='mt-20 grid md:grid-cols-12 gap-8 items-center'>
          {/* IMAGE */}
          <div className='relative h-[400px] w-full overflow-hidden  md:col-span-7'>
            <AnimatePresence mode='wait'>
              <motion.img
                key={services[active].image}
                src={services[active].image}
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
                {/* heading */}
                <div className='flex items-center gap-3'>
                  <div className='w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center'>
                    {React.createElement(services[active].icon, { className: 'text-white w-5 h-5' })}
                  </div>

                  <h2 className='text-3xl md:text-4xl font-semibold text-black max-w-xl'>
                    {services[active].heading}
                  </h2>
                </div>

                {/* desc */}
                <p className='text-gray-600 leading-relaxed max-w-lg'>{services[active].desc}</p>

                {/* line */}
                <div className='w-full h-[2px] bg-gray-300' />

                {/* button */}
                <button className='bg-blue-600 hover:bg-blue-700 w-55 text-white px-7 py-3 rounded-lg  transition flex items-center gap-2'>
                  Lets work together
                  <ArrowUpRight size={18} />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
