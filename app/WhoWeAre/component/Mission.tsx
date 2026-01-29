import React from 'react';
import Image from 'next/image';
import Container from '../../../components/Container';

const Mission= () => {
	return (
		<section className='w-full py-20 bg-gray-50'>
			<Container>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* LEFT SIDE — Image + Cards */}
					<div className='relative flex flex-col items-start'>
						{/* Main Image */}
						<div className='relative w-120 h-150 rounded-4xl overflow-hidden'>
							<Image
								src='/grassandsolar.avif'
								alt='Solar'
								fill
								className='object-cover'
								priority
							/>
						</div>

						{/* Two White Cards stacked */}
						<div className='absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-col gap-6 px-4'>
							{/* Card 1 */}
							<div className='bg-white rounded-xl shadow-lg p-6 w-64 relative'>
								<h1 className='text-lg font-bold text-black'>Card 1 Title</h1>
								<div className='h-1 w-12 bg-gray-200 mt-3'></div>
							</div>
							{/* Card 2 */}
							<div className='bg-white rounded-xl shadow-lg p-6 w-64 relative'>
								<h1 className='text-lg font-bold text-black'>Card 2 Title</h1>
								<div className='h-1 w-12 bg-gray-200 mt-3'></div>
							</div>
						</div>
					</div>

					{/* RIGHT SIDE — Mission Content */}
					<div className='flex flex-col justify-center gap-6'>
						<h2 className='text-4xl font-bold text-black'>Mission</h2>
						<p className='text-xl text-black/80 font-semibold'>Our Purpose</p>
						<p className='text-black/70 leading-relaxed'>
							Create sustainable solutions that improve quality of life and meet  evolving needs.
						</p>

						<ul className='list-disc pl-6 text-black/80 space-y-2 mt-4'>
							<li>Save 60-80% on monthly electricity bills</li>
							<li>Use solar during day, grid power at night</li>
							<li>Lowest cost option with fastest payback</li>
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Mission;
