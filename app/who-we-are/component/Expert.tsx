'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Container';

const leaders = [
  {
    name: 'John Richards',
    post: 'Founder & CEO',
    image: '/placeholder1.avif',
  },
  {
    name: 'Nicky Jones',
    post: 'Accountant',
    image: '/placeholder2.avif',
  },
  {
    name: 'James Danglars',
    post: 'PR Manager',
    image: '/placeholder3.jpg',
  },
  {
    name: 'Adam Levine',
    post: 'Marketing Executive',
    image: '/placeholder4.webp',
  },
];

const Expert = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 mb-12"
        >
          <h2 className="text-sm text-black flex items-center gap-3 tracking-wider">
            <div className="w-6 h-[2px] bg-blue-500" />
            Expertise
          </h2>

          <h3 className="text-black text-4xl font-semibold">
            Meet Our Leaders
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-72 object-cover object-top"
              />

              {/* Blue tag at the bottom center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-50 bg-blue-700  px-1 py-2 rounded-lg flex flex-col items-center text-center">
                <span className="text-white font-semibold">{leader.name}</span>
                <span className="text-gray-200 text-sm">{leader.post}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex items-center gap-4 my-8">
  <div className="flex-1 h-px bg-gray-400"></div>
  <span className="text-gray-700 font-medium text-center whitespace-nowrap">
    A trusted, secure, and quality services
  </span>
  <div className="flex-1 h-px bg-gray-400"></div>
</div>


      </Container>
    </section>
  );
};

export default Expert;

