'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '@/public/Hero image.webp';
import { GoArrowUpRight } from 'react-icons/go';

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
		<section className='relative w-full min-h-screen flex items-center overflow-hidden border-b border-white/10'>
			{/* Background Image */}
			<motion.div
				style={{ y: backgroundY }}
				className='absolute inset-0 -z-10'
			>
				<Image
					src={HeroImage}
					alt='Energy infrastructure background'
					fill
					priority
					className='aspect-auto object-right object-cover sm:object-center'
				/>

				{/* Professional Dark Overlay */}
				<div className='absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70' />
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
					className='relative pt-32 pb-24 text-left'
				>
					<div className='max-w-5xl'>
						{/* Heading */}
						<motion.h1
							variants={itemVariants}
							className='text-[clamp(2.8rem,4.8vw,6rem)] text-white leading-[1.05] tracking-tight font-normal'
						>
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className='block'
							>
								Integrated Energy &
							</motion.span>

							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className='block bg-linear-to-r from-white via-blue-200 to-white bg-clip-text text-transparent'
							>
								Technology Solutions
							</motion.span>
						</motion.h1>

						{/* Paragraph */}
						<motion.p
							variants={itemVariants}
							className='mt-8 max-w-2xl text-[clamp(1.05rem,1.4vw,1.3rem)] text-white/85 leading-[1.75] font-extralight'
						>
							We structure and deliver high-impact ventures across energy, infrastructure, and digital systems — building
							resilient, future-ready enterprises.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							variants={itemVariants}
							className=''
						>
							<Link
								href='/what-we-do'
								className='inline-flex items-center gap-2 text-white font-normal hover:text-gray-300 transition duration-300 mt-4'
							>
								Learn More{' '}
								<span className='ml-1'>
									<GoArrowUpRight className='' />
								</span>
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
