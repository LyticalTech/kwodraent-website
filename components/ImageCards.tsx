import React from 'react';
import Image from 'next/image';

const ImageCards = () => {
	const cards = [
		{ title: 'Solar Energy', image: '/safety.avif' },
		{ title: 'Energy Storage', image: '/mountain.avif' },
		{ title: 'Consulting', image: '/grassandsolar.avif' },
		{ title: 'Sustainability', image: '/roofsolar.avif' },
	];

	return (
		<section className='w-full'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0'>
				{cards.map((card) => (
					<div
						key={card.title}
						className='relative w-full h-75'
					>
						<Image
							src={card.image}
							alt={card.title}
							fill
							className='object-cover'
							priority
						/>

						
					</div>
				))}
			</div>
		</section>
	);
};

export default ImageCards;
