import React from 'react';
import Container from '@/components/Container';

const Hero = () => {
	return (
		<section className='w-full bg-black py-32'>
			<Container>
				<div className='flex flex-col items-center text-center max-w-3xl mx-auto'>
					<h1 className='text-4xl lg:text-5xl font-semibold text-white leading-tight'>What We Do</h1>

					<p className='mt-6 text-white text-xl lg:text-lg'>Kwo Draent operates in the global energy landscape to drive economic value.</p>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
