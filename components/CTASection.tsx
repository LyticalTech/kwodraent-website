'use client';

import { motion, Variants } from 'framer-motion';
import Container from '@/components/Container';

const CTASection = () => {
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
<section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">

{/* Background image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
	backgroundImage: "url('/footer.png')", // put image in public/images
  }}
/>

{/* Dark overlay */}
<div className="absolute inset-0 bg-black/50" />

{/* Content */}
<div className="relative z-10">
  <Container>
	<motion.div
	  className="flex flex-col items-center text-center max-w-3xl mx-auto px-4"
	  variants={containerVariants}
	  initial="hidden"
	  whileInView="visible"
	  viewport={{ once: true, margin: '-100px' }}
	>
	  {/* Heading */}
	  <motion.h1
		className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight"
		variants={itemVariants}
	  >
		Discover The Kwo Draent Advantage
	  </motion.h1>

	  {/* Buttons */}
	  <motion.div
		className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto"
		variants={itemVariants}
	  >
		<a href="/contact" className="w-full sm:w-auto">
		  <motion.button
			className="w-full sm:w-auto px-6 md:px-8 py-3 bg-white text-blue-600 rounded-full font-medium transition-colors hover:bg-black hover:text-white"
			variants={buttonVariants}
			whileHover="hover"
			whileTap="tap"
		  >
			Learn About Us
		  </motion.button>
		</a>

		<a href="/what-we-do" className="w-full sm:w-auto">
		  <motion.button
			className="w-full sm:w-auto px-6 md:px-8 py-3 border border-white text-white rounded-full font-medium transition-colors hover:bg-black hover:text-white"
			variants={buttonVariants}
			whileHover="hover"
			whileTap="tap"
		  >
			Explore Solutions
		  </motion.button>
		</a>
	  </motion.div>
	</motion.div>
  </Container>
</div>
</section>

	);
};

export default CTASection;
