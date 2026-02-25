
'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Container from '../../../components/Container';

const Contact = () => {
	// Animation variants
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.1,
			},
		},
	};

	const fadeInUpVariants: Variants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const fadeInLeftVariants: Variants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const fadeInRightVariants: Variants = {
		hidden: { opacity: 0, x: 30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const scaleInVariants: Variants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const buttonVariants: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
		hover: {
			scale: 1.02,
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
		<section className='w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white'>
			<Container>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						className='grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 2xl:gap-36 items-center'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
					>
						{/* LEFT — Image with broken border */}
						<motion.div
							className='relative w-full max-w-lg mx-auto lg:mx-0 aspect-3/4 rounded-3xl overflow-hidden order-2 lg:order-1'
							variants={fadeInLeftVariants}
						>
							{/* Main Image */}
							<Image
								src='assets/Hero image.png' 
								alt='Solar energy installation'
								fill
								className='object-cover object-top-right'
								priority
							/>

						</motion.div>

						{/* RIGHT — Contact content */}
						<motion.div
							className='bg-white flex flex-col justify-center mt-8 order-1 lg:order-2'
							variants={fadeInRightVariants}
						>
							{/* Header */}
							<motion.h1
								className='flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base  text-black mb-4 sm:mb-6'
								variants={fadeInUpVariants}
							>
								<span className='inline-block w-3 sm:w-4 h-0.5 bg-blue-500'></span>
								Contact Us
							</motion.h1>

							<motion.h2
								className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight'
								variants={fadeInUpVariants}
							>
								Let&apos;s Talk About Your Solar Future
							</motion.h2>

							<motion.p
								className='text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed'
								variants={fadeInUpVariants}
							>
								Join over 100 companies using clean, affordable energy from Energy Max. Contact our team for a free assessment.
							</motion.p>

							{/* Form */}
							<motion.form
								className='space-y-4 sm:space-y-5'
								variants={scaleInVariants}
							>
								{/* Name + Email */}
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'>
									<motion.div variants={fadeInUpVariants}>
										<label
											htmlFor='name'
											className='block text-xs sm:text-sm  mb-2 sm:mb-3 text-black'
										>
											Name
										</label>
										<input
											id='name'
											type='text'
											placeholder='James Kers'
											className='w-full border border-gray-500  text-gray-500 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
										/>
									</motion.div>

									<motion.div variants={fadeInUpVariants}>
										<label
											htmlFor='email'
											className='block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-black'
										>
											Email
										</label>
										<input
											id='email'
											type='email'
											placeholder='name@company.com'
											className='w-full border border-gray-500 text-gray-500  rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
										/>
									</motion.div>
								</div>

								{/* Company */}
								<motion.div variants={fadeInUpVariants}>
									<label
										htmlFor='company'
										className='block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-black'
									>
										Company name
									</label>
									<input
										id='company'
										type='text'
										placeholder='Green Tech Company'
										className='w-full border border-gray-500 text-gray-500  rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
									/>
								</motion.div>

								{/* Message */}
								<motion.div variants={fadeInUpVariants}>
									<label
										htmlFor='message'
										className='block text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-black'
									>
										Message
									</label>
									<textarea
										id='message'
										rows={4}
										placeholder='Type a message...'
										className='w-full border border-gray-500 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none'
									/>
								</motion.div>

								<motion.button
									type='submit'
									className='w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base  hover:bg-blue-700 transition-colors'
									variants={buttonVariants}
									whileHover='hover'
									whileTap='tap'
								>
									Submit
								</motion.button>
							</motion.form>
						</motion.div>
					</motion.div>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
