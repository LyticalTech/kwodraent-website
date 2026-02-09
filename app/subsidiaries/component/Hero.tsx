'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';

const Hero = () => {
	return (
		<section className='w-full bg-black py-32'>
			<Container>
				<div className='flex flex-col items-center text-center max-w-3xl mx-auto'>
					<motion.h1
						className='text-4xl lg:text-5xl font-semibold text-white leading-tight'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						The Kwo Draent Group
					</motion.h1>
					<motion.p
						className='mt-6 text-white text-xl lg:text-lg'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
					>
						Kwo Draent operates in the global energy landscape to drive economic value.
					</motion.p>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
