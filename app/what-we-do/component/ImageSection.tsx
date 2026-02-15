'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/Container';

const cards = [
  {
    id: 1,
    description: '5 Ways To Maximize Your Solar Savings',
    imageUrl: '/OILRIG.avif',
  },
  {
    id: 2,
    description: '5 Ways To Maximize Your Solar Savings',
    imageUrl: '/OILRIG.avif',
  },
  {
    id: 3,
    description: '5 Ways To Maximize Your Solar Savings',
    imageUrl: '/OILRIG.avif',
  },
];

const ImageSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black">
      <Container>
        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {cards.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative w-full h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden rounded-2xl">
                <Image
                  src={card.imageUrl}
                  alt={card.description}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col flex-1 mt-5">
                <p className="text-white text-lg sm:text-xl lg:text-2xl leading-snug">
                  {card.description}
                </p>

                {/* BUTTON */}
                <button className="mt-6 w-fit bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-lg transition">
                  Read More
                </button>
              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default ImageSection;
