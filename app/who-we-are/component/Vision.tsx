import React from 'react';
import Image from 'next/image';
import Container from '../../../components/Container';

const Vision = () => {
	return (
		<section className='w-full py-20 bg-gray-50'>
			<Container>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{' '}
					{/* LEFT SIDE */}
					<div className='flex flex-col gap-6'>
					<h1 className="flex items-center gap-3 text-base font-semibold text-black mb-6">
            <span className="inline-block w-4 h-0.5 bg-blue-500" />{''}
            Vision
          </h1>

						<p className='text-xl font-semibold text-black/80'>Our Vision</p>
						<div className='border-b border-black w-120 mt-2'></div>

						<p className='text-black text-base leading-relaxed max-w-lg'>
							Lead industry in innovations that advance modern living and a net-zero future.</p>

						<ul className='space-y-3 text-sm text-black/60 mt-4'>
							<li>Save 60-80% on monthly electricity bills</li>
							<li>Use solar during day, grid power at night</li>
							<li> Lowest cost option with fastest payback</li>
						</ul>
					</div>
					{/* RIGHT SIDE */}
					<div className='grid place-items-center'>
						{/* Layered Grid */}
						<div className='grid'>
							{/* Image layer */}
							<div className='relative h-150 w-140 max-w-md rounded-3xl overflow-hidden col-start-1 row-start-1'>
								<Image
									src='/grassandsolar.avif'
									alt='Solar field'
									fill
									className='object-cover'
									priority
								/>
							</div>

							{/* Cards layer */}
							<div className='col-start-1  row-start-1 flex flex-col items-center justify-center gap-6 translate-y-0 translate-x-0'>
								<div className=' border-2 border-dashed border-white p-6'>
									<div className='bg-white shadow-lg p-2 w-64 h-32 '>
										<h3 className='text-4xl text-center font-semibold mt-4 text-black'>65% </h3>
										<p className='text-black text-center mt-4'>Reduction in Electricity Costs</p>
									</div>

									<div className='bg-white  shadow-lg p-2 w-64 h-32 mt-4'>
										<h3 className='text-4xl text-center font-semibold mt-4 text-black'>90%</h3>
										<p className='text-black text-center mt-4'>Energy Independence Achieved</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Vision;
