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
			description: 'reduction in time spent on translations',
			percent: '90%',
		},
		{
			description: 'reduction in translation workload and productivity recapture',
			percent: '50%',
		},
		{
			description: 'return on investment',
			percent: '345%',
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
					className='flex flex-row gap-4 items-center justify-between flex-wrap'
				>
					{/* Left Column — Heading */}
					<motion.div
						variants={itemVariants}
						className='flex items-start'
					>
						<h2 className='text-base flex items-center gap-2 '>
							{' '}
							<div className='w-4 h-1 bg-blue-500'></div>
							Who We Are
						</h2>
					</motion.div>

					{/* Right Column — Description + Stats */}
					<div className='flex flex-col items-start gap-3'>
						<motion.p
							variants={itemVariants}
							className='text-4xl  text-black max-w-xl'
						>
							A global joint venture to expand the frontiers of subsea. Kwo Draent will expand the frontiers of subsea to drive a
							sustainable energy future.
						</motion.p>

						<motion.p
							variants={itemVariants}
							className='text-sm text-black leading-relaxed max-w-lg'
						>
							Businesses using our services see significant efficiency improvements and cost savings.
						</motion.p>

						<motion.a
							variants={itemVariants}
							href='#'
							className='inline-flex items-center gap-2 text-blue-500 font-medium'
						>
							Learn more <GoArrowUpRight className='text-blue-500' />
						</motion.a>

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
    className="p-6 flex flex-col justify-between h-full relative bg-white"
  >
    {/* Short vertical line */}
    <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gray-300" />

    <div className="pl-4">
      <p className="text-5xl text-black">{stat.percent}</p>

      <p className="mt-4 text-sm text-black">
        {stat.description}
      </p>
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
