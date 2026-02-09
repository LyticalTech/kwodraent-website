'use client';

import { motion } from 'framer-motion';

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
		<section className='w-full py-20 bg-black'>
			<div className='mx-auto max-w-7xl px-6'>
				<motion.h1
					className='text-4xl font-bold text-white mb-12 text-left'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					Our Core Values
				</motion.h1>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
					{items.map((item, index) => (
						<motion.div
							key={item.number}
							className=' p-8 flex flex-col gap-4'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{
								duration: 0.6,
								delay: index * 0.1,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							{/* Number Tag */}
							<motion.span
								className='text-2xl bg-blue-500 w-12 h-12 text-center rounded-xl p-1 font-semibold text-white'
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{
									duration: 0.5,
									delay: index * 0.1 + 0.2,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								{item.number}
							</motion.span>

							{/* Title */}
							<h1 className='text-xl font-semibold text-white'>{item.title}</h1>

							{/* Description */}
							<p className='text-white/70 text-xl leading-relaxed'>{item.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Value;
