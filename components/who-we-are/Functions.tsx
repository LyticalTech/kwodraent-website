import React from 'react';
import Container from '../Container';

const cards = [
	{
		title: 'Asset Delopment',
		number: 1,
		hoverText: 'Advancing energy assets from early concept through structured, investment-ready development.',
	},
	{
		title: 'Enineering, Procurement & Construction',
		number: 2,
		hoverText: 'Delivering integrated engineering, procurement, and construction aligned to requirements.',
	},
	{
		title: 'Operations & Maintenance',
		number: 3,
		hoverText: 'Maintaining asset integrity and performance through disciplined operations and maintenance execution.',
	},
	{
		title: 'Drilling',
		number: 4,
		hoverText:
			'Executing drilling programs with the technical oversight and operational control required for complex environments.',
	},
	{
		title: 'Project Management',
		number: 5,
		hoverText: 'Managing projects with structured governance, risk control, and delivery discipline.',
	},

	{
		title: 'Manpower & Training',
		number: 6,
		hoverText: 'Developing workforce capability through targeted technical and safety training programs.',
	},
	{
		title: 'Marine Services',
		number: 7,
		hoverText: 'Providing marine assets and logistics for offshore installation, intervention, and field operations.',
	},
	{
		title: 'Fabrication',
		number: 8,
		hoverText: 'Fabrication energy infrastructure and components to certified industry and project specifications.',
	},
	{
		title: 'Digital Transformation',
		number: 9,
		hoverText:
			'Digital transformation through bespoke systems, data integration, and scalable software that eliminate operational blind spots.',
	},
];

const Functions = () => {
	return (
		<section className='w-full bg-black py-16'>
			<Container>
				{/* Heading */}
				<div className='px-4 max-w-6xl mx-auto flex flex-col items-start gap-6'>
					<h2 className='text-base text-white flex items-center gap-2'>
						<div className='w-4 h-1 bg-blue-500' />
						What We Do
					</h2>

					{/* Description + Button */}
					<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full'>
						<p className='text-white text-xl font-semibold md:text-3xl max-w-3xl leading-tight'>
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
				<div className='px-4 py-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12'>
					{cards.map((card) => (
						<a
							key={card.number}
							href='/what-we-do'
							className='group relative block h-60 overflow-hidden border border-neutral-600 rounded-none transition-all duration-300'
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
									<p className='text-base max-w-50 text-white opacity-0 group-hover:opacity-100 transition-all duration-300'>
										{card.hoverText}
									</p>
									<span className='text-base font-bold text-white'>({card.number})</span>
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
