'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '@/components/Container';
import Link from 'next/link';

const Hero = () => {
	const { scrollYProgress } = useScroll();

	// Parallax effect for background
	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	// Container animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	// Item animation variants
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 40,
			filter: 'blur(10px)',
		},
		visible: {
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1] as const, // Custom easing curve
			},
		},
	};

	// Button animations are defined inline with whileHover/whileTap

	return (
		<section className='relative w-full min-h-screen bg-blue-500 border-b border-white flex flex-col justify-end overflow-hidden'>
			{/* Animated Background Layer */}
			<motion.div
				style={{ y: backgroundY, opacity }}
				className='absolute inset-0 overflow-hidden pointer-events-none'
			>
				{/* Floating blur orbs */}
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.2, 0.3, 0.2],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className='absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl'
				/>
				<motion.div
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.1, 0.2, 0.1],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
					className='absolute bottom-32 left-10 w-96 h-96 md:w-[600px] md:h-[600px] bg-blue-600 rounded-full blur-3xl'
				/>
			</motion.div>

			<Container>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className='relative pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20 sm:pt-24 md:pt-28'
				>
					<div className='grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 md:gap-16 lg:gap-40'>
						{/* LEFT - Heading with staggered word animation */}
						<motion.div variants={itemVariants}>
							<h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-6xl text-white leading-tight font-bold'>
								<motion.span
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.3 }}
									className='inline-block'
								>
									Engineering for a{' '}
								</motion.span>
								<br className='hidden sm:block' />
								<motion.span
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.5 }}
									className='inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent'
								>
									sustainable future
								</motion.span>
							</h1>
						</motion.div>

						{/* RIGHT - Description and CTA */}
						<motion.div
							variants={itemVariants}
							className='max-w-md lg:pl-12'
						>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.8 }}
								className='text-sm sm:text-base text-white leading-relaxed mb-6 sm:mb-8 lg:mb-10'
							>
								Join hundreds of businesses switching to solar. We provide complete solar systems that reduce costs and help the
								environment.
							</motion.p>

							<motion.button
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.3 }}
								className='group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-blue-600 text-sm sm:text-base font-medium rounded-full shadow-lg overflow-hidden'
							>
								<motion.span
									className='absolute inset-0 bg-blue-600'
									initial={{ scale: 0 }}
									whileHover={{ scale: 1 }}
									transition={{ duration: 0.4 }}
									style={{ originX: 0.5, originY: 0.5 }}
								/>
								<Link href='/what-we-do'>
									<span className='relative z-10 group-hover:text-black transition-colors duration-300'>Explore solutions</span>
								</Link>
							</motion.button>
						</motion.div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
};

export default Hero;
