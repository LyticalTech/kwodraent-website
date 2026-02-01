import React from 'react';

const Value = () => {
	const items = [
		{
			number: '01',
			title: 'Expertise',
			text: 'Deep understanding of the systems we operate in. We know the work, the risks, and have access to the local market.',
		},
		{
			number: '02',
			title: 'Collaboration',
			text: 'Use our free online calculator to see how much solar can save you based on your current electricity bills.',
		},
		{
			number: '03',
			title: 'Execution Certainty',
			text: 'We pursue high standards in execution, engineering, and delivery. Work is done thoroughly, correctly, and to specification.',
		},
		{
			number: '04',
			title: 'Integrity',
			text: 'Use our free online calculator to see how much solar can save you based on your current electricity bills.',
		},
		{
			number: '05',
			title: 'Innovation',
			text: 'Use our free online calculator to see how much solar can save you based on your current electricity bills.',
		},
	];

	return (
		<section className='w-full py-20 bg-black '>
			<div className='mx-auto max-w-7xl px-6'>
				<h1 className='text-4xl font-bold text-white mb-12 text-left'>Our Core Values</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
					{items.map((item) => (
						<div
							key={item.number}
							className='border border-black/10 rounded-xl p-8 flex flex-col gap-4'
						>
							{/* Number Tag */}
							<span className='text-2xl bg-blue-500 w-12 h-12 text-center rounded-xl p-1 font-semibold text-white'>{item.number}</span>

							{/* Title */}
							<h1 className='text-xl font-semibold text-white'>{item.title}</h1>

							{/* Description */}
							<p className='text-white/70 text-xl leading-relaxed'>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Value;
