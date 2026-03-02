import Image from 'next/image';
import Link from 'next/link';

const Description = () => {
  const cards = [
    {
      title: 'Who We Are',
      image: '/assets/Hero image.png',
      link: '/Who-We-Are', // page 1
    },
    {
      title: 'What We Do',
      image: '/assets/Bottom What We Do.png',
      link: '/What-We-Do', // page 2
    },
    {
      title: 'Partnerships',
      image: '/Bottom our partners.webp',
      link: '/partnerships', // page 3
    },
  ];

  return (
    <section className='p-16 bg-white'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {cards.map((card) => (
          <div key={card.title} className='group block'>
            
            {/* Image */}
            <div className='relative w-full h-64'>
              <Image
                src={card.image}
                alt={card.title}
                fill
                className='object-cover rounded-3xl'
                priority
              />
            </div>

            {/* Decorative horizontal bar */}
            <div className='mt-4 h-0.5 w-full bg-gray-300 transition-colors duration-300 group-hover:bg-blue-600' />

            {/* Title + Button */}
            <div className='mt-6'>
              <h3 className='text-xl'>{card.title}</h3>

              {/* BUTTON LINK */}
              <Link href={card.link}>
                <span className='inline-block mt-4 px-5 py-2 text-sm bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700'>
                  Explore
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Description;
