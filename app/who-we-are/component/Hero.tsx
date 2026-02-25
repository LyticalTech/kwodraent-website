'use client';

import { useRef } from 'react';
import Container from '@/components/Container';
import { motion, useInView } from 'framer-motion';

const Hero = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	const stats = [
		{ description: 'of combined industry experience', percent: '10+' },
		{ description: 'stores launched and successfully scaled', percent: '500+' },
		{ description: 'customer retention rate', percent: '95%' },
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7 },
		},
	};

	const statCardVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section
			ref={ref}
			className='bg-white h-[calc(100vh-10rem)] mt-20 '
		>
			<Container>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className='flex flex-col mt-24 gap-16'
				>
					{/* HEADING */}
					<motion.div
						variants={itemVariants}
						className='max-w-md mt-12'
					>
						<h2 className='text-base flex items-center gap-3 mb-6'>
							<span className='inline-block w-4 h-0.5 bg-blue-500' />
							Businity’s services
						</h2>

						<p className='text-4xl text-black leading-tight'>
							Focus on the Customer,
							<br />
							Not Your Manual Work.
						</p>
					</motion.div>

					{/* IMAGE + CONTENT */}
					{/* IMAGE + CONTENT */}
					<div className='flex flex-col lg:flex-row  items-start justify-between'>
						{/* IMAGE — smaller */}
						<motion.div
							variants={itemVariants}
							className='w-full lg:w-[30%]'
						>
							<img
								src='/assets/Who we are page.jpg'
								alt='stats'
								className='w-full h-[300px] object-cover rounded-2xl'
							/>
						</motion.div>

						{/* RIGHT CONTENT — larger */}
						<div className='w-full lg:w-[50%] flex flex-col justify-between'>
							{/* TEXT */}
							<motion.p
								variants={itemVariants}
								className='text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl'
							>
								We go beyond digital infrastructure. We partner with brands to build scalable, future-ready eCommerce experiences.
								With our expert team and innovative approach, we support businesses to launch and succeed in the digital
								marketplace.
							</motion.p>

							{/* STATS */}
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
										className='p-4 flex flex-col justify-between h-full  border-l border-gray-300'
									>
										<div>
											<p className='text-5xl  text-black'>{stat.percent}</p>

											<p className='mt-4 text-ms text-black'>{stat.description}</p>
										</div>
									</motion.div>
								))}
							</motion.div>
						</div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
};

export default Hero;
