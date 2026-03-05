import React from 'react';
import Image from 'next/image';
import Container from '../../../components/Container';
import WhoWeAreImage from '@/public/assets/Hero image.png';
import PartinersImage from '@/public/assets/Bottom our partners.png';
import whatWeDoImag from '@/public/assets/Bottom What We Do.png';

const Roles = () => {
	const cards = [
		{
			title: 'Who We Are',
			image: WhoWeAreImage,
			link: '/who-we-are',
		},
		{
			title: 'What We Do',
			image: whatWeDoImag,
			link: '/what-we-do',
		},
		{
			title: 'Our Partners',
			image: PartinersImage,
			link: '/partnerships',
		},
	];

	return (
		<section className='px-4 py-16 bg-white'>
			<div className='max-w-5xl mx-auto grid grid-auto-fit-md gap-8'>
				{cards.map((card) => (
					<a
						key={card.title}
						href={card.link}
						className='group block'
					>
						{/* Image */}
						<div className='relative w-full h-60 rounded-3xl overflow-hidden'>
							<Image
								src={card.image}
								alt={card.title}
								fill
								className='object-cover rounded-3xl'
								priority
							/>
						</div>

						{/* Decorative horizontal bar */}
						<div className='px-2'>
							<div className='mt-4 h-0.5 w-full bg-gray-300 transition-colors duration-300 group-hover:bg-blue-600' />
						</div>

						{/* Title + Button */}
						<div className='mt-4'>
							<h3 className='text-2xl font-light text-gray-800'>{card.title}</h3>
							<span className='inline-block mt-4 px-5 py-2 text-sm border border-gray-800 text-gray-800 rounded-md transition-colors duration-300 group-hover:bg-gray-800 group-hover:text-white'>
								Read More
							</span>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default Roles;
