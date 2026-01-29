import React from 'react';

const Value = () => {
	const items = [
		{
			number: '01',
			title: 'Discovery',
			text: 'We analyze requirements and understand project goals.',
		},
		{
			number: '02',
			title: 'Planning',
			text: 'Clear roadmaps are created to ensure smooth execution.',
		},
		{
			number: '03',
			title: 'Design',
			text: 'User-focused and scalable design solutions.',
		},
		{
			number: '04',
			title: 'Development',
			text: 'High-quality implementation using modern tools.',
		},
		{
			number: '05',
			title: 'Launch',
			text: 'Deployment, testing, and continuous improvement.',
		},
	];

	return (
		<section className='w-full py-20 bg-white'>
			<div className='mx-auto max-w-7xl px-6'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
					{items.map((item) => (
						<div
							key={item.number}
							className='border border-black/10 rounded-xl p-8 flex flex-col gap-4'
						>
							{/* Number Tag */}
							<span className='text-sm font-semibold text-blue-600'>{item.number}</span>

							{/* Title */}
							<h1 className='text-2xl font-semibold text-black'>{item.title}</h1>

							{/* Description */}
							<p className='text-black/70 leading-relaxed'>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Value;
