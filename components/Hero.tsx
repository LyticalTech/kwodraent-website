'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
	const { scrollYProgress } = useScroll();

	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	return (
		<section className='relative w-full min-h-screen border-b border-white flex flex-col justify-end overflow-hidden'>
			{/* BACKGROUND IMAGE */}
			<div className='absolute inset-0 -z-10'>
				<Image
					src='/Hero image.webp' // put image inside public folder
					alt='Solar background'
					fill
					priority
					className='object-cover'
				/>

				{/* Dark overlay for readability */}
				<div className='absolute inset-0' />
			</div>

			{/* Animated floating blur effects */}
			<motion.div
				style={{ y: backgroundY, opacity }}
				className='absolute inset-0 overflow-hidden pointer-events-none'
			>
				<motion.div
					animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
					transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
					className='absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl'
				/>
				<motion.div
					animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
					transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
					className='absolute bottom-32 left-10 w-96 h-96 md:w-150 md:h-150 bg-blue-600 rounded-full blur-3xl'
				/>
			</motion.div>

			<Container>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='visible'
					className='relative pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20 sm:pt-24 md:pt-28'
				>
					<div className='grid grid-cols-1 lg:grid-cols-[1.6fr_.8fr] gap-8 sm:gap-12 md:gap-16 lg:gap-40'>

						{/* LEFT */}
						<motion.div variants={itemVariants}>
							<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white leading-tight'>
								<motion.span
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.3 }}
									className='inline-block'
								>
									Engineering for a sustainable
								</motion.span>

								<br />

								<motion.span
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.5 }}
									className='inline-block bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent'
								>
									future
								</motion.span>
							</h1>
						</motion.div>

						{/* RIGHT */}
						<motion.div
							variants={itemVariants}
							className='max-w-md lg:pl-12'
						>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.8 }}
								className='text-xs sm:text-base text-white leading-relaxed mb-6 sm:mb-8 lg:mb-10'
							>
								Join hundreds of businesses switching to solar. We provide complete solar systems that reduce costs and help the
								environment.
							</motion.p>

							<motion.span
								className='absolute inset-0 bg-blue-600'
								initial={{ scale: 0 }}
								whileHover={{ scale: 1 }}
								transition={{ duration: 0.4 }}
								style={{ originX: 0.5, originY: 0.5 }}
							/>
						</motion.div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
};

export default Hero;
