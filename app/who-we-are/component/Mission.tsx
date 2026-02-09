'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '../../../components/Container';

const Mission = () => {
	return (
		<section className='w-full py-20 bg-gray-50'>
			<Container>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{/* LEFT SIDE */}
					<motion.div
						className='grid place-items-center'
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					>
						{/* Layered Grid */}
						<div className='grid'>
							{/* Image layer */}
							<motion.div
								className='relative h-150 w-140 max-w-md rounded-3xl overflow-hidden col-start-1 row-start-1'
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
							>
								<Image
									src='/grassandsolar.avif'
									alt='Solar field'
									fill
									className='object-cover'
									priority
								/>
							</motion.div>

							{/* Cards layer */}
							<div className='col-start-1 row-start-1 flex flex-col items-center justify-center gap-6 translate-y-0 translate-x-0'>
								<div className='border-2 border-dashed border-white p-6'>
									<motion.div
										className='bg-white shadow-lg p-2 w-64 h-32'
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, margin: '-100px' }}
										transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
									>
										<h3 className='text-4xl text-center font-semibold mt-4 text-black'>65%</h3>
										<p className='text-black text-center mt-4'>Reduction in Electricity Costs</p>
									</motion.div>

									<motion.div
										className='bg-white shadow-lg p-2 w-64 h-32 mt-4'
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true, margin: '-100px' }}
										transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
									>
										<h3 className='text-4xl text-center font-semibold mt-4 text-black'>90%</h3>
										<p className='text-black text-center mt-4'>Energy Independence Achieved</p>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* RIGHT SIDE */}
					<motion.div
						className='flex flex-col gap-6'
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					>
						<motion.h1
							className='flex items-center gap-3 text-base font-semibold text-black mb-6'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						>
							<span className='inline-block w-4 h-0.5 bg-blue-500' />
							Mission
						</motion.h1>

						<motion.p
							className='text-xl font-semibold text-black/80'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						>
							Our Purpose
						</motion.p>

						<motion.div
							className='border-b border-black w-120 mt-2'
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
							style={{ transformOrigin: 'left' }}
						/>

						<motion.p
							className='text-black text-base leading-relaxed max-w-lg'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
						>
							Create sustainable solutions that improve quality of life and meet society&apos;s evolving needs.
						</motion.p>

						<motion.ul
							className='space-y-3 text-sm text-black/60 mt-4'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
						>
							<li>Save 60–80% on monthly electricity bills</li>
							<li>Use solar during day, grid power at night</li>
							<li>Lowest cost option with fastest payback</li>
						</motion.ul>
					</motion.div>
				</div>
			</Container>
		</section>
	);
};

export default Mission;
