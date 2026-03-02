import Container from '@/components/Container';
import React from 'react';
import Image from 'next/image';

const cards = [
  {
    id: 1,
    title: 'Excellence & reliability',
    description:
      'We start with a conversation - to understand your story, your vision and what truly matters to you. This is where trust begins.',
    image: '/icons/1.png',
  },
  {
    id: 2,
    title: 'Innovation',
    description:
      'Through guided sessions, we shape meaningful moments into timeless images. Whether editorial or candid every frame is intentional.',
    image: '/icons/2.png',
  },
  {
    id: 3,
    title: 'Integrity',
    description:
      'Your gallery is hand-edited curated and presented with artistry. Developed in a format designed to preserve and share beautifully.',
    image: '/icons/3.png',
  },
  {
    id: 4,
    title: 'Partnership',
    description:
      'Your gallery is hand-edited curated and presented with artistry. Developed in a format designed to preserve and share beautifully.',
    image: '/icons/4.png',
  },
];

const Approach = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col items-center gap-12">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl text-black text-center">
            Our Approach
          </h1>

          {/* LINE */}
          <div className="w-full h-px bg-gray-300" />

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">

            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white p-6 rounded-2xl flex flex-col items-start"
              >
                {/* IMAGE ONLY HOVER */}
                <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 overflow-hidden rounded-full group">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>

                {/* TEXT */}
                <h2 className="text-lg text-left  mb-3">
                  {card.title}
                </h2>

                <p className="text-gray-600 text-sm text-left">
                  {card.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Approach;
