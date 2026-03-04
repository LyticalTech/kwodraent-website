'use client';

import React from 'react';
import Image from 'next/image';
import RigorIcon from '@/public/assets/rigorIcon.png';
import DisciplineIcon from '@/public/assets/disciplineIcon.png';
import IntegrityIcon from '@/public/assets/integrityIcon.png';
import ExecutionIcon from '@/public/assets/executionIcon.png';

const cards = [
	{
		Id: 1,
		image: RigorIcon,
		title: 'Technical Rigor',
		disc: 'Engineering standards are applied consistently from concept through operations.',
	},
	{
		Id: 2,
		image: DisciplineIcon,
		title: 'Capital Discipline',
		disc: 'Our project decisions are structured around long-term economics and asset value.',
	},
	{
		Id: 3,
		image: IntegrityIcon,
		title: 'Asset Integrity',
		disc: 'We design and execute with safety, operability, reliability, and asset longevity in view from the outset.',
	},
	{
		Id: 4,
		image: ExecutionIcon,
		title: 'Integrated Execution',
		disc: 'Engineering, marine, supply chain, and digital functions aligned within a single delivery structure.',
	},
];

const OurApproach = () => {
	return (
		<div className='px-4 py-40  bg-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl font-bold text-gray-800 mb-8'>Our Approach</h2>
				<div className='mb-20 h-px w-full bg-gray-100' />
				<div className='grid grid-auto-fit-sm gap-4'>
					{cards.map((card) => (
						<div
							key={card.Id}
							className='border border-gray-100 rounded-lg p-6 bg-white hover:bg-gray-100 transition duration-300 cursor-pointer'
						>
							{/* Image */}
							<div className=''>
								<Image
									src={card.image}
									alt={card.title}
									height={80}
									className='w-full h-fit max-h-56 object-cover'
									priority
								/>
							</div>
							{/* Title */}
							<div className=''>
								<h3 className='mt-2 text-xl font-semibold text-gray-800'>{card.title}</h3>
							</div>
							<div className='mt-2'>
								<p className='text-gray-500'>{card.disc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurApproach;
