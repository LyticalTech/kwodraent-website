'use client';
import { useRef } from 'react';
import Container from './Container';
import { motion, useInView } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';

const Discover = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const stats = [
		{
			description: 'Years of combined leadership and sector experience across energy and technology',
			percent: '100+',
			top: 0,
		},
		{
			description: 'Energy & Infrastructure Projects Executed',
			percent: '500+',
			top: 50,
		},
		{
			description: 'Efficiency gains enabled through integrated solutions',
			percent: '40%',
			top: 90,
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
			className='bg-white  sm:pt-16 pb-16'
		>
			<Container>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className='max-w-6xl mx-auto flex flex-row gap-6 items-center justify-between flex-wrap'
				>
					{/* Left Column — Heading */}
					<motion.div
						variants={itemVariants}
						className='flex items-start'
					>
						<h2 className='text-base flex items-center gap-2 '>
							<div className='w-4 h-1 bg-blue-500 font-extralight'></div>
							Who We Are
						</h2>
					</motion.div>

					{/* Right Column — Description + Stats */}
					<div className='flex flex-col items-start gap-3'>
						<motion.p
							variants={itemVariants}
							className='text-[clamp(2.1rem,3vw,6rem)] leading-tight font-light text-black max-w-6xl'
						>
							Kwo Draent is a structured ecosystem of operating companies built to advance complex energy and infrastructure
							projects.
						</motion.p>
						{/* 
						<motion.p
							variants={itemVariants}
							className='text-sm text-black leading-relaxed max-w-lg'
						>
							Businesses using our services see significant efficiency improvements and cost savings.
						</motion.p> */}

						{/* Stats Grid */}
						<motion.div
							variants={containerVariants}
							className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'
						>
							{stats.map((stat) => (
								<motion.div
									key={stat.percent}
									variants={statCardVariants}
									whileHover={{ y: -8, transition: { duration: 0.3 } }}
									className='p-6 flex flex-col justify-between h-full relative bg-white'
								>
									{/* Short vertical line */}
									<div className='absolute left-0 top-6 bottom-6 w-[2px] bg-gray-300' />
									<div className={`absolute top-${stat.top} left-0 h-8 w-2 bg-blue-700 rounded-r-sm`}  style={{top: stat.top}}/>

									<div className='pl-4'>
										<p className='text-5xl text-black font-light'>{stat.percent}</p>

										<p className='mt-4 text-sm text-black font-extralight'>{stat.description}</p>
									</div>
								</motion.div>
							))}
						</motion.div>

						<motion.a
							variants={itemVariants}
							href='#'
							className='inline-flex items-center gap-2 text-blue-500 font-thin mt-4'
						>
							Learn more <GoArrowUpRight className='text-blue-500' />
						</motion.a>
					</div>
				</motion.div>
			</Container>
		</section>
	);
};

export default Discover;
