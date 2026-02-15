'use client';

import { motion } from 'framer-motion';
import Container from '@/components/Container';

const Hero = () => {
	return (
		<section className='w-full bg-white py-12'>
			<Container>
			<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className='flex flex-col items-start mt-24 gap-6 mb-8'
>
  <h2 className='text-sm text-black flex items-center gap-3 tracking-wider '>
    <div className='w-6 h-[2px] bg-blue-500' />
    What We Do
  </h2>

  {/* content row */}
  <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-6 w-full'>
    
    <h3 className='text-black text-3xl md:text-4xl  max-w-xl'>
      Copy about detailed services
    </h3>

    <p className='text-gray-600 max-w-xl leading-relaxed'>
      OneSubsea maintains the highest standards of integrity in all its
      operations and follows SLB’s Code of Conduct, policies and governance
      practices with respect to business ethics, internal controls and
      compliance with applicable laws.
    </p>

  </div>
</motion.div>

			</Container>
		</section>
	);
};

export default Hero;
