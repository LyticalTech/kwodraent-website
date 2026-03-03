'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Footer = () => {
	// Animation variants
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
	};

	const buttonVariants: Variants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1] as const,
			},
		},
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.3,
				ease: 'easeOut',
			},
		},
		tap: {
			scale: 0.98,
		},
	};

	return (
		<footer className='bg-white overflow-hidden'>
			<div className='relative w-full bg-blue-700'>
				<div className='absolute -top-4 -left-32 md:-left-24 lg:-left-6 h-16 w-60 rounded-lg bg-transparent border border-neutral-300/75 border-dashed '></div>
				<div className='absolute -top-4 -left-32 md:-left-24 lg:-left-6 h-24 w-50 rounded-lg bg-transparent border border-neutral-300/75 border-dashed '></div>
				<div className='absolute -top-4 -left-32 md:-left-24 lg:-left-6 h-32 w-40 rounded-lg bg-transparent border border-neutral-300/75 border-dashed '></div>
				<Container className='relative py-24 z-10'>
					<motion.div
						className=' flex flex-col items-center text-center max-w-3xl mx-auto px-4'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
					>
						{/* Heading */}
						<motion.h1
							className='text-[clamp(2.2rem,4vw,6rem)] font-semibold text-white leading-tight'
							variants={itemVariants}
						>
							Discover The Kwo Draent Advantage
						</motion.h1>

						{/* Buttons */}
						<motion.div
							className='mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto'
							variants={itemVariants}
						>
							<a
								href='/contact'
								className='w-full sm:w-auto'
							>
								<motion.button
									className='w-full cursor-pointer sm:w-auto px-6 md:px-8 py-3 bg-white text-blue-600 rounded-full font-medium transition-colors hover:bg-black hover:text-white'
									variants={buttonVariants}
									whileHover='hover'
									whileTap='tap'
								>
									Learn About Us
								</motion.button>
							</a>

							<a
								href='/what-we-do'
								className='w-full sm:w-auto'
							>
								<motion.button
									className='w-full cursor-pointer sm:w-auto px-6 md:px-8 py-3 border border-white text-white rounded-full font-medium transition-colors hover:bg-black hover:text-white'
									variants={buttonVariants}
									whileHover='hover'
									whileTap='tap'
								>
									Explore Solutions
								</motion.button>
							</a>
						</motion.div>
					</motion.div>
				</Container>
			</div>
			<div className='relative w-full bg-black border-t border-white/5 overflow-hidden'>
				<div className='absolute -top-4 -right-32 md:-right-24 lg:-right-6 h-16 w-60 rounded-lg bg-transparent border border-neutral-300/75 border-dashed'></div>
				<div className='absolute -top-4 -right-32 md:-right-24 lg:-right-6 h-24 w-50 rounded-lg bg-transparent border border-neutral-300/75 border-dashed'></div>
				<div className='absolute -top-4 -right-32 md:-right-24 lg:-right-6 h-32 w-40 rounded-lg bg-transparent border border-neutral-300/75 border-dashed'></div>
				<Container>
					{/* Main Grid */}
					<div className='md:grid md:grid-cols-2 md:divide-x md:divide-neutral-500'>
						{/* LEFT — Logo & Description */}
						<div className='pt-16 pl-4 pr-4 lg:pr-6'>
							<Link
								href='/'
								className='flex items-center gap-3'
							>
								<Image
									src='/Kwodraent Logo White.png'
									height={40}
									width={200}
									alt='kwodraent'
								/>
							</Link>

							<p className='mt-2 text-gray-300 text-lg font-medium leading-relaxed max-w-lg'>
								Your integrated energy solutions partner
							</p>
						</div>

						{/* DIVIDER */}
						{/* <div className=''>
								<div className='w-px h-full bg-neutral-500' />
							</div> */}
						<div className='pt-8 sm:pt-16 px-4 lg:px-6'>
							{/* RIGHT — Navigation & Address */}
							<div className='mt-10 sm:mt-0 sm:grid sm:grid-cols-2'>
								{/* NAV */}
								<nav className='sm:mt-1 flex flex-col space-y-3'>
									{[
										['Who We Are', '/who-we-are'],
										['What We Do', '/what-we-do'],
										['Subsidiaries', '/subsidiaries'],
										['Partnerships', '/partnerships'],
										['Contact Us', '/contact'],
									].map(([label, href]) => (
										<Link
											key={label}
											href={href}
											className='text-gray-300 text-[15px] font-medium text-sm hover:text-white/70 transition w-fit'
										>
											{label}
										</Link>
									))}
								</nav>

								{/* ADDRESS + SOCIAL */}
								<div className='mt-10 sm:mt-0'>
									<div className='mt-4'>
										<h3 className='text-gray-300 font-bold text-lg mb-2'>Headquarters</h3>
										<address className='not-italic text-white/80 text-[15px] leading-relaxed'>
											26, Jeremiah Ugwu Street, Lekki Phase 1, Lagos Nigeria
										</address>
									</div>

									{/* SOCIAL ICONS */}
									{/* <div className='flex items-center gap-5 pt-2'>
										<a
											href='#'
											aria-label='X'
											className='group size-11 flex items-center text-white hover:text-gray-800 justify-center border-[1.5px] border-gray-400 rounded-full hover:bg-gray-200 active:bg-gray-100 cursor-pointer transform transition-transform duration-300 hover:scale-105'
										>
											<svg
												className='w-5 h-5'
												fill='currentColor'
												viewBox='0 0 24 24'
											>
												<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z' />
											</svg>
										</a>

										<a
											href='#'
											aria-label='LinkedIn'
											className='group size-11 flex items-center text-white hover:text-gray-800 justify-center border-[1.5px] border-gray-400 rounded-full hover:bg-gray-200 active:bg-gray-100 cursor-pointer transform transition-transform duration-300 hover:scale-105'
										>
											<svg
												className='w-5 h-5'
												fill='currentColor'
												viewBox='0 0 24 24'
											>
												<path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' />
											</svg>
										</a>

										<a
											href='#'
											aria-label='YouTube'
											className='group size-11 flex items-center text-white hover:text-gray-800 justify-center border-[1.5px] border-gray-400 rounded-full hover:bg-gray-200 active:bg-gray-100 cursor-pointer transform transition-transform duration-300 hover:scale-105'
										>
											<svg
												className='w-5 h-5'
												fill='currentColor'
												viewBox='0 0 24 24'
											>
												<path d='M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
											</svg>
										</a>
									</div> */}
								</div>
							</div>

							{/* BOTTOM — RIGHT Side Only */}
							<div className='mt-28 pb-10 flex items-center justify-center md:justify-start'>
								<p className='text-gray-400 text-sm'>© Copyright 2026 Kwo Draent – All rights reserved.</p>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
