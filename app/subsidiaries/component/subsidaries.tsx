'use client';

import { motion } from 'framer-motion';
import Container from '../../../components/Container';
import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/outline';

const items = [
	{
		id: 'solar',
		title: 'Xastra',
		desc: 'Zero upfront costs. Choose from rental options or low-interest loans that fit your budget.',
	},
	{
		id: 'battery',
		title: 'Kwo Draent Energy',
		desc: 'Certified professionals using premium equipment. Installation guaranteed by our experienced technical team.',
	},
	{
		id: 'grid',
		title: 'Schiste Integrated Energy Services',
		desc: 'Environmentally responsible manufacturing. Solar system energy that truly helps the planet.',
	},
	{
		id: 'monitoring',
		title: 'Leden Energy Ltd',
		desc: '25-year performance warranty on all systems. Your investment is protected for decades of reliable clean energy.',
	},
	{
		id: 'scale',
		title: 'SWAPS Synergy Lts',
		desc: 'Zero upfront costs. Choose from rental options or low-interest loans that fit your budget.',
	},
	{
		id: 'savings',
		title: 'Lytical Technologies',
		desc: 'Certified professionals using premium equipment. Installation guaranteed by our experienced technical team.',
	},
	{
		id: 'custom',
		title: 'Meta Mincrest',
		desc: 'Environmentally responsible manufacturing. Solar system energy that truly helps the planet.',
	},
	{
		id: 'sustainability',
		title: 'Potentis Energy Ltd',
		desc: '25-year performance warranty on all systems. Your investment is protected for decades of reliable clean energy.',
	},
];

const Subsidaries = () => {
	return (
		<section className='bg-white py-32'>
			<Container>
				<h1 className='flex items-center gap-3 text-base font-semibold text-black mb-6'>
					<span className='inline-block w-4 h-0.5 bg-blue-500' />
					{''}
					Subsidiaries
				</h1>

				<div className='flex w-full flex-col md:flex-row items-start md:items-start gap-4 md:gap-0'>
					<motion.h2
						className='text-black text-2xl md:text-5xl font-semibold'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					>
						Copy on Subsidiaries
					</motion.h2>
					<motion.p
						className='text-black text-sm md:text-base md:ml-auto md:max-w-md'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
					>
						Brief copy on subsidiaries. Brief copy on subsidiaries. Brief copy on subsidiaries. Brief copy on subsidiaries. Brief
						copy on subsidiaries.
					</motion.p>
				</div>

				<div className='relative mt-16 w-full h-48 rounded-2xl overflow-hidden'>
					<Image
						src='/OILRIG.avif'
						alt='Oil rig'
						fill
						className='object-cover'
					/>
				</div>

				<div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{items.map((item) => (
						<div
							key={item.id}
							className='p-6 transition hover:-translate-y-1 hover:shadow-xl'
						>
							<div className='w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 mb-4'>
								<BoltIcon className='w-6 h-6 text-blue-600' />
							</div>

							<h3 className='mt-2 text-lg font-semibold text-black'>{item.title}</h3>

							<p className='mt-2 text-gray-600 text-sm'>{item.desc}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Subsidaries;
