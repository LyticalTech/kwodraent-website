import React from 'react';
import Container from './Container';

const Discover = () => {
	const stats = [
		{
			title: 'Higher Lead Volume',
			description: 'Scaled from 100 to 300 qualified leads in 60 days.',
			percent: '3X',
		},
		{
			title: 'Increase in CTR',
			description: 'Optimized creative testing and ad placement for best results.',
			percent: '+180%',
		},
		{
			title: 'Conversion Rate',
			description: 'Through data-backed landing page optimization.',
			percent: '+60%',
		},
	];

	return (
		<section className='bg-white py-16'>
			<Container>
				<div className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 lg:gap-12 items-start'>
					{/* Left Column — Heading */}
					<div className='flex items-start'>
						<h2 className='text-base '>- Discover Kwo Draent</h2>
					</div>

					{/* Right Column — Description + Stats */}
					<div className='space-y-12'>
						{/* Description */}
						<p className='text-2xl leading-relaxed text-black'>
							We create and deploy the technology and systems needed to simultaneously reduce emissions while meeting the world’s
							growing energy demands, ensuring progress for people and the planet, on the journey to net zero and beyond.
						</p>

						{/* Stats Grid */}
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{stats.map((stat) => (
								<div
									key={stat.title}
									className='bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col justify-between h-full'
								>
									<div>
										<p className='text-3xl  text-black'>{stat.percent}</p>
										<h3 className='text-xl  text-black mt-2'>{stat.title}</h3>
										<p className='mt-24 text-black text-sm'>{stat.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Discover;
