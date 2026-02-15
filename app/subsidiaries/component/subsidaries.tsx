'use client';

import Container from '../../../components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { BoltIcon } from '@heroicons/react/24/outline';

const cards = [
  {
    id: 1,
    icon: '/assets/Lytical Darkmode.png',
    subtitle: 'Kwo Draent Energy',
    description:
      'Unlimited website design requests with fast delivery, ensuring your brand stays modern and professional.',
    image: '/assets/KD group 1.png',
    link: '/',
  },
  {
    id: 2,
    icon: '/assets/Lytical Darkmode.png',
    subtitle: 'Xastra',
    description:
      'Unlimited development tasks, bug fixes, and updates to keep your website fast, secure and scalable.',
    image: '/assets/KD group 2.png',
    link: '/',
  },
  {
    id: 3,
    icon: '/assets/Lytical Darkmode.png',
    subtitle: 'Schiste Intergrated Energy services',
    description:
      'Continous branding support with unlimited request for logos, guidelines and visual identity updates.',
    image: '/assets/KD group 3.png',
    link: '/',
  },
  {
    id: 4,
    icon: '/assets/Lytical Darkmode.png',
    subtitle: 'Leden Energy',
    description:
      'Unlimited ad creatives, social media designs and campaign visuals delivered fast and on brand.',
    image: '/assets/KDgroup4.png',
    link: '/',
  },
  {
    id: 5,
    icon: '/assets/Lytical Darkmode.png',
    subtitle: 'Lytical Technologies',
    description:
      'Unlimited UI/UX design requests with ongoing improvements for web apps, dashboards and digital products.',
    image: '/assets/KD group 5.png',
    link: '/',
  },
  {
    id: 6,
    icon: '/assets/Lytical Darkmode.png',
    subtitle: 'SWAPS Synergy Ltd',
    description:
      'Ongoing e-commerce design and development with unlimited requests for updates and improvements.',
    image: '/assets/KD group 6.jpg',
    link: '/',
  },
  {
    id: 7,
    icon: '/assets/Lytical Darkmode.png',
    subtitle: 'Meta Mincrest',
    description:
      'Unlimited website design requests with fast delivery, ensuring your brand stays modern and professional.',
    image: '/assets/KD group 7.jpg',
    link: '/',
  },
];

const Subsidaries = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <Container>

        {/* TOP SECTION RESPONSIVE */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10">
          <h1 className="flex items-center gap-3 text-sm md:text-base font-semibold text-white">
            <span className="inline-block w-4 h-0.5 bg-blue-500" />
            The Kwo Draent Group
          </h1>

          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-3xl leading-relaxed">
            Explore Orix services designed to elevate brands. From creative design to digital solutions, we craft impactful results that drive growth.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 min-h-[320px] md:min-h-[380px] flex flex-col justify-end p-6"
            >
              {/* BG IMAGE */}
              <Image
                src={card.image}
                alt={card.subtitle}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* SMALL ICON */}
              <div className="absolute top-5 left-5 z-20 text-white">
                <BoltIcon className="w-5 h-5 md:w-6 md:h-6" />
              </div>

              {/* COMPANY LOGO */}
              <div className="relative z-20 mb-3">
                <Image
                  src={card.icon}
                  alt="company"
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="relative z-20">
                <h2 className="text-base md:text-lg font-semibold text-white">
                  {card.subtitle}
                </h2>

                <p className="text-xs md:text-sm mt-2 text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* BASE BG */}
              <div className="absolute inset-0 bg-neutral-900 group-hover:opacity-0 transition duration-500" />
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Subsidaries;
