'use client';
import { useRef } from 'react';
import Container from './Container';
import { motion, useInView } from 'framer-motion';

const Discover = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

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

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	// Slide up fade in animation
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 30,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	// Stats card animation with scale
	const statCardVariants = {
		hidden: {
			opacity: 0,
			y: 40,
			scale: 0.95,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<section
			ref={ref}
			className='bg-white py-16'
		>
			<Container>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className='grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 lg:gap-12 items-start'
				>
					{/* Left Column — Heading */}
					<motion.div
						variants={itemVariants}
						className='flex items-start'
					>
						<h2 className='text-base flex items-center gap-2 '>
							{' '}
							<div className='w-4 h-1 bg-blue-500'></div> Discover Kwo Draent
						</h2>
					</motion.div>

					{/* Right Column — Description + Stats */}
					<div className='space-y-12'>
						{/* Description */}
						<motion.p
							variants={itemVariants}
							className='text-2xl leading-relaxed text-black  font-bold'
						>
							We create and deploy the technology and systems needed to simultaneously reduce emissions while meeting the world’s
							growing energy demands, ensuring progress for people and the planet, on the journey to net zero and beyond.
						</motion.p>

						{/* Stats Grid */}
						<motion.div
							variants={containerVariants}
							className='grid grid-cols-1 md:grid-cols-3 gap-8'
						>
							{stats.map((stat) => (
								<motion.div
									key={stat.title}
									variants={statCardVariants}
									whileHover={{
										y: -8,
										transition: { duration: 0.3 },
									}}
									className='bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col justify-between h-full'
								>
									<div>
										<p className='text-3xl  text-black font-semibold'>{stat.percent}</p>
										<h3 className='text-xl  text-black mt-2'>{stat.title}</h3>
										<p className='mt-24 text-black text-sm'>{stat.description}</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
};

export default Discover;
