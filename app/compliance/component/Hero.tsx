import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/Container';

const Hero = () => {
	return (
		<section className='w-full bg-white py-12'>
			<Container>
<<<<<<< HEAD
				<div className='flex flex-col items-start mt-20 gap-6 mb-8'>
					<h2 className='text-sm text-gray-800 flex font-medium items-center gap-2 tracking-wide '>
						<div className='w-4 h-1 bg-blue-600 ' />
=======
				<div className='flex flex-col items-start mt-24 gap-6 mb-8'>
					<h2 className='text-sm text-black flex items-center gap-3'>
						<div className='w-6 h-[2px] bg-blue-500' />
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
						Ethics and Compiliance
					</h2>

					{/* content row */}
					<div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6 w-full'>
						<h3 className='text-[clamp(2.2rem,3.2vw,5rem)] font-medium text-gray-800 leading-[1.1] tracking-tight'>
							Ethics and Compliance
						</h3>

						<p className='text-gray-600 max-w-xl leading-relaxed font-medium'>
							OneSubsea maintains the highest standards of integrity in all its operations and follows SLB’s Code of Conduct,
							policies and governance practices with respect to business ethics, internal controls and compliance with applicable
							laws.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
