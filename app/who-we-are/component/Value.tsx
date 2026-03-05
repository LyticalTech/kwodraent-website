'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

const Value = () => {
	return (
		<div className='w-full py-24 bg-black'>
			{/* ================= BLACK SECTION ================= */}
			<div className='w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4'>
				{/* MISSION */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className='flex flex-col'
				>
					<h2 className='text-sm text-white flex font-medium items-center gap-2 tracking-wide '>
						<div className='w-4 h-1 bg-blue-600 ' />
						Mission
					</h2>

					<h3 className='mt-8 mb-4 text-white text-[clamp(2rem,2.5vw,6rem)] leading-tight font-light'>Our Mission</h3>

					<div className='w-full h-[2px] bg-white/40' />

					<p className='mt-4 text-white text-lg leading-relaxed max-w-xl font-extralight'>
						We leverage our expertise, integrated capabilities, and disciplined execution to reduce complexity, unlock
						opportunities, and deliver value to our clients and stakeholders.
					</p>
				</motion.div>

				{/* VISION */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
					viewport={{ once: true }}
					className='flex flex-col'
				>
					<h2 className='text-sm text-white flex font-medium items-center gap-2 tracking-wide '>
						<div className='w-4 h-1 bg-blue-600 ' />
						Vision
					</h2>

					<h3 className='mt-8 mb-4 text-white text-[clamp(2rem,2.5vw,6rem)] leading-tight font-light'>Our Vision</h3>

					<div className='w-full h-[2px] bg-white/50' />

					<p className='mt-4 text-white text-lg leading-relaxed max-w-xl font-extralight'>
						To be the definitive integrated technology and energy ecosystem, where strategic intelligence, bold execution, and
						uncompromising integrity converge to deliver extraordinary client outcomes.
					</p>
				</motion.div>
			</div>

			<div className='px-4 mt-28 max-w-6xl mx-auto w-full h-[2px] bg-white/40' />

			{/* ================= CORE VALUES SECTION ================= */}

			{/* 3 column grid */}
			<div className=' w-full py-16 mx-auto max-w-6xl px-4'>
				{/* LEFT BIG (2/3 width) */}

				<h1 className='text-white text-[clamp(2rem,2.5vw,6rem)] leading-tight font-light'>Our Core Values</h1>

				{/* RIGHT CARDS (1/3 width) */}
				<div className='mt-8 w-full grid grid-auto-fit-md gap-6 mb-10'>
					{/* CARD 1 */}
					<div className='p-2'>
						<span className='text-blue-500 text-xl font-medium'>01.</span>
						<h3 className='text-2xl font-light text-white mt-2 mb-2'>Execution Excellence</h3>
						<p className='text-gray-300 leading-relaxed font-extralight'>
							Each venture is structured with technical rigor, commercial discipline, and deliberate oversight from concept
							through delivery. We approach complexity methodically, ensuring that performance is measured by durable outcomes.
						</p>
					</div>

					{/* CARD 2 */}
					<div className='p-2'>
						<span className='text-blue-500 text-xl font-medium'>02.</span>
						<h3 className='text-2xl font-light text-white mt-2 mb-2'>Reliability</h3>
						<p className='text-gray-300 leading-relaxed font-extralight'>
							Enduring partnerships depend on consistency. We uphold commitments with transparency and accountability, managing
							risk with clarity and composure.
						</p>
					</div>

					{/* CARD 3 */}
					<div className='p-2'>
						<span className='text-blue-500 text-xl font-medium'>03.</span>
						<h3 className='text-2xl font-light text-white mt-2 mb-2'>Collaboration</h3>
						<p className='text-gray-300 leading-relaxed font-extralight'>
							We work closely with you, our partners, and stakeholders to bring clarity and coordination as we focus on delivery.
						</p>
						<p className='mt-1 text-gray-300 leading-relaxed font-extralight'>
							Together, we move complex energy ventures forward with confidence and purpose.
						</p>
					</div>
				</div>
				{/* BUTTON */}
				<Link href='/what-we-do'>
					<button className='mt-6 w-fit bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 cursor-pointer transition flex items-center gap-2'>
						Explore More <GoArrowUpRight />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Value;
