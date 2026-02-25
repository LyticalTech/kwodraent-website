import React from 'react';
import Container from '../Container';

const cards = [
	{
		title: 'Urban Planning & Landscape',
		number: 1,
		hoverText: 'Developing large-scale plans for sustainable and efficient cities.',
	},
	{
		title: 'Interior Design',
		number: 2,
		hoverText: 'Creating stylish, functional, and comfortable living spaces.',
	},
	{
		title: 'Sustainable & Green Architecture',
		number: 3,
		hoverText: 'Utilizing natural light, ventilation, and shading for energy efficiency.',
	},
	{
		title: 'Restoration & Heritage Conservation',
		number: 4,
		hoverText: 'Preserving and refurbishing aged structures while maintaining their original charm.',
	},
	{
		title: 'Construction & Project Management',
		number: 5,
		hoverText: 'Managing the entire process from design to construction for a seamless experience.',
	},
	{
		title: '3D Printing & Architecture',
		number: 6,
		hoverText: 'Creating detailed architectural models quickly for design validation.',
	},
	{
		title: 'VR/AR Architectural Walkthroughs',
		number: 7,
		hoverText: 'Experience architectural designs in a fully interactive virtual environment.',
	},
	{
		title: 'Metaverse & Digital Twin Architecture',
		number: 8,
		hoverText: 'Designing immersive digital environments for businesses, social hubs and experiences.',
	},
	{
		title: 'Marine Services',
		number: 9,
	},
];

const Functions = () => {
	return (
		<section className='w-full bg-black py-16'>
			<Container>
				{/* Heading */}
				<div className='flex flex-col items-start gap-6'>
					<h2 className='text-base text-white flex items-center gap-2'>
						<div className='w-4 h-1 bg-blue-500' />
						What We Do
					</h2>

					{/* Description + Button */}
					<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full'>
						<p className='text-white text-4xl max-w-4xl font-thin'>
							We’ve been at the forefront of subsea for decades, because we put our customers first. Here are some of the ways we
							can help you.
						</p>

						<a
							href='#what-we-do'
							className='inline-flex'
						>
							<button className='flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition'>
								Explore Our Solutions
							</button>
						</a>
					</div>
				</div>

				{/* 3x3 Card Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12'>
					{cards.map((card) => (
						<a
							key={card.number}
							href='/what-we-do'
							className='group relative block h-60 overflow-hidden border border-white rounded-none transition-all duration-300'
						>
							{/* Background image layer */}
							<div
								className='absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-105'
								style={{
									backgroundImage: `url('/assets/servicesBackground.jpg')`,
								}}
							/>

							{/* Overlay for better text readability */}
							<div className='absolute inset-0 bg-black/40 group-hover:bg-blue-700/80 transition-all duration-300 ' />

							{/* Card content */}
							<div className='relative flex flex-col justify-between h-full p-6 z-10'>
								{/* Top row */}
								<div className='flex justify-between items-start'>
									<h3 className='text-lg  text-white'>{card.title}</h3>
									<button className='border-2 border-white text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300'>
										Service
									</button>
								</div>

								{/* Bottom row */}
								<div className='flex justify-between items-end'>
									<p className='text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300'>
										{card.hoverText}
									</p>
									<span className='text-xl  text-white'>({card.number})</span>
								</div>
							</div>
						</a>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Functions;
