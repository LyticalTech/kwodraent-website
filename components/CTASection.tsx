import React from 'react';
import Container from '@/components/Container';

const CTASection = () => {
	return (
		<section className='w-full bg-blue-600 py-32'>
			<Container>
				<div className=' w-400 flex flex-col items-center text-center max-w-3xl mx-auto'>
					<h1 className='text-5xl font-semibold lg:text-5xl text-white leading-tight'>Discover The Kwo Draent Advantage</h1>

					<p className=' w-170 mt-6 text-white/90 text-sm lg:text-lg'>
						Get a personalized estimate in minutes. Our solar calculator uses your actual usage to show real savings potential.
					</p>

					{/* Buttons */}
					<div className='mt-10 flex items-center gap-6'>
						<a href='#calculate'>
							<button className='px-8 py-3 bg-white text-blue-600 rounded-full font-medium transition hover:bg-black hover:text-white'>
								Calculate Your Energy
							</button>
						</a>
						<a href='#solutions'>
							<button className='px-8 py-3 border border-white text-white rounded-full font-medium transition hover:bg-black hover:text-white'>
								Explore Solutions
							</button>
						</a>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default CTASection;
