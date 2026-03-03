'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import WhoWeAreImage from '@/public/assets/whoWeAre.jpg';

const Hero = () => {
	const { scrollYProgress } = useScroll();

	// Parallax background movement
	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
	const fadeOut = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);

	// Animation Variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 40,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.9,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<section className='relative w-full min-h-screen flex items-center overflow-hidden shadow-gray-700 border-b-20 border-black/90'>
			{/* Background Image */}
			<motion.div
				style={{ y: backgroundY }}
				className='absolute inset-0 -z-10'
			>
				<Image
					src={WhoWeAreImage}
					alt='Energy infrastructure background'
					fill
					priority
					className='aspect-auto object-right sm:object-cover md:object-center'
				/>

				{/* Professional Dark Overlay */}
				<div className='absolute inset-0 bg-black/60' />
				<div className='absolute inset-0 bg-linear-to-b from-blue-900/20 via-blue-900/30 to-black/70' />
			</motion.div>

			{/* Subtle Animated Glow Effects */}
			<motion.div
				style={{ opacity: fadeOut }}
				className='absolute inset-0 pointer-events-none -z-10'
			>
				<motion.div
					animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
					className='absolute top-24 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl'
				/>
			</motion.div>

			<div className='relative w-full max-w-6xl mx-auto px-6'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className='relative pt-24 pb-24 text-left'
				>
					<div className='max-w-5xl'>
						{/* Heading */}
						<motion.h1
							variants={itemVariants}
							className='text-sm text-white flex font-medium items-center gap-2 tracking-wide '
						>
							<div className='w-4 h-1 bg-blue-600 ' />
							Who We Are
						</motion.h1>
						<motion.h2
							variants={itemVariants}
							className='mt-6 text-[clamp(2.2rem,3.6vw,5rem)] font-mediu text-white leading-[1.1] tracking-tight'
						>
							We are Kwo Draent.
						</motion.h2>
						<motion.p
							variants={itemVariants}
							className='mt-4 max-w-5xl text-[clamp(1.05rem,1.4vw,1.3rem)] text-white/85 leading-[1.6]'
						>
							Africa’s energy landscape is opening to indigenous participation at scale. We integrate technical depth, sector
							experience and commercial rigor to deliver energy and industrial solutions safely, efficiently, and reliably.
						</motion.p>
						<motion.div
							variants={itemVariants}
							className='mt-12 grid md:grid-cols-3 gap-12 text-white'
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className='relative block border-l-[1px] border-l-gray-300/30 px-8 py-6'
							>
								<div className='absolute top-3 left-0 h-8 w-2 bg-blue-700 rounded-r-sm' />
								<motion.h2 className='text-[clamp(2.6rem,3.5vw,6rem)] tracking-wide text-white'>100+</motion.h2>
								<motion.p className='mt-4 text-lg text-white/85 leading-[1.5]'>
									Years of combined leadership and sector experience across energy and technology
								</motion.p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className='relative block border-l-[1px] border-l-gray-300/30 px-8 py-6 bg-linear-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'
							>
								<div className='absolute top-16 left-0 h-8 w-2 bg-blue-700 rounded-r-sm' />
								<motion.h2 className='text-[clamp(2.6rem,3.5vw,6rem)] tracking-wide text-white'>500+</motion.h2>
								<motion.p className='mt-4 text-lg text-white/85 leading-[1.5]'>
									Energy & Infrastructure Projects Executed
								</motion.p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								className='relative block border-l-[1px] border-l-gray-300/30 px-8 py-6 bg-linear-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'
							>
								<div className='absolute top-32 left-0 h-8 w-2 bg-blue-700 rounded-r-sm' />
								<motion.h2 className='text-[clamp(2.6rem,3.5vw,6rem)] tracking-wide text-white'>40%</motion.h2>
								<motion.p className='mt-4 text-lg text-white/85 leading-[1.5]'>
									Efficiency gains enabled through integrated solutions
								</motion.p>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
