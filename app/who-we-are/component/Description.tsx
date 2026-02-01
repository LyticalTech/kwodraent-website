import React from 'react';
import Image from 'next/image';

const Description= () => {
	const cards = [
		{
			title: 'Who We Are',
			image: '/whatwedo.avif',
			link: '#solar',
		},
		{
			title: 'What We Do',
			image: '/whoweare.avif',
			link: '#storage',
		},
		{
			title: 'Sustainability & Safety',
			image: '/safety.avif',
			link: '#consulting',
		},
	];

	return (
		<section className='p-16  bg-white'>
			
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{cards.map((card) => (
						<a
							key={card.title}
							href={card.link}
							className='group block'
						>
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
								<h3 className='text-xl font-semibold'>{card.title}</h3>

								<span className='inline-block mt-4 px-5 py-2 text-sm bg-blue-600 text-white rounded-full'>Read More</span>
							</div>
						</a>
					))}
				</div>
			
		</section>
	);
};

export default Description;
