'use client';

import Container from '../../../components/Container';
import Image from 'next/image';
import Link from 'next/link';
import { GoNorthStar } from 'react-icons/go';
import KwodraentLogo from '@/public/assets/companies_logos/Kwo Draent Energy Darkmode.png';
import XastraLogo from '@/public/assets/companies_logos/Xastra Darkmode.png';
import SchisteLogo from '@/public/assets/companies_logos/SchisteDarkmode (1).png';
import LedenLogo from '@/public/assets/companies_logos/Leden Energy Darkmode.png';
import LyticalLogo from '@/public/assets/companies_logos/Lytical Darkmode.png';
import SwapsLogo from '@/public/assets/companies_logos/SWAPSsyn Darkmode.png';

const cards = [
	{
		id: 1,
		icon: KwodraentLogo,
		title: 'Kwodraent Oil & Gas Limited',
		subtitle: 'Strategic Energy Partnerships',
		description: 'A strategic energy platform for asset development, EPC consortia, vessel, and rig supply.',
		image: '/assets/KD group 1.png',
		link: '/',
	},
	{
		id: 2,
		icon: XastraLogo,
		title: 'Xastra Limited',
		subtitle: 'Oil & Gas Support Services',
		description:
			'Oil and gas support services covering manpower supply, supply chain optimization, and commercial support for project delivery.',
		image: '/KD group 2.webp',
		link: '/',
	},
	{
		id: 3,
		icon: SchisteLogo,
		title: 'Schiste Intergrated Energy Services',
		subtitle: 'Marine Operattions & Training',
		description: 'Marine-focused energy services, manpower, and training support company',
		image: '/assets/KD group 3.png',
		link: '/',
	},
	{
		id: 4,
		icon: LedenLogo,
		title: 'Leden Energy Limited',
		subtitle: 'Global Energy Ventures',
		description: 'Leveraging cross-border capabilities for selective energy assets development through partnerships and ventures',
		image: '/assets/KDgroup4.png',
		link: '/',
	},
	{
		id: 5,
		icon: LyticalLogo,
		title: 'Lytical Technologies Limited',
		subtitle: 'Flagship IT & Digital Solutions',
		description: 'Delivering scalable software platforms, high-performance database systems, and end-to-end IT solutions.',
		image: '/assets/KD group 5.png',
		link: '/',
	},
	{
		id: 6,
		icon: SwapsLogo,
		title: 'SWAPS Synergy Limited',
		subtitle: 'High-Value Projects & Asset Development',
		description: 'High-value projects, asset acquisition, and complex energy developments.',
		image: '/assets/KD group 6.jpg',
		link: '/',
	},
];

const Subsidaries = () => {
	return (
		<section className='bg-black py-16'>
			<Container>
				{/* TOP SECTION RESPONSIVE */}
				<div className='px-4 flex flex-col gap-6 lg:gap-10'>
					<h1 className='mt-10 md:text-base text-sm text-white flex font-medium items-center gap-2 tracking-wide'>
						<div className='w-4 h-1 bg-blue-600' />
						The Kwo Draent Group
					</h1>

					<p className='text-white max-w-5xl text-[clamp(1.05rem,1.8vw,1.3rem)] leading-[1.5]'>
						The Kwo Draent Group brings together technology, operations, manpower, marine services, asset development, and
						strategic partnerships. Together, our companies move energy opportunities from origination to execution, across Africa
						and beyond.
					</p>
				</div>
				<div className='px-4'>
					<div className='mt-10 h-px w-full bg-white/20' />
				</div>

				{/* GRID */}
				<div className='px-4 grid grid-auto-fit-lg gap-6 mt-20 mb-10'>
					{cards.map((card) => (
						<Link
							key={card.id}
							href={card.link}
							className='relative group rounded-xl overflow-hidden border border-gray-800 bg-neutral-900 p-6 flex flex-col items-start gap-4 transition duration-200'
						>
							{/* IMAGE (VISIBLE BY DEFAULT) */}
							<Image
								src={card.image}
								alt={card.subtitle}
								fill
								className='object-cover opacity-40 group-hover:opacity-100 transition duration-300'
							/>

							{/* BLACK OVERLAY ON HOVER */}
							<div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition duration-300' />

							{/* CONTENT */}
							<div className='relative z-20 text-gray-400'>
								<GoNorthStar className='w-5 h-5 md:w-6 md:h-6' />
							</div>

							<div className='mt-16 relative z-20'>
								<Image
									src={card.icon}
									alt='company'
									width={100}
									height={50}
									className='object-contain'
								/>
							</div>

							<div className='relative z-20'>
								<h2 className='text-xl font-semibold text-white'>{card.title}</h2>
								<h3 className='text-base text-gray-300 font-light leading-relaxed'>({card.subtitle})</h3>
								<p className='text-base mt-4 text-gray-300 leading-relaxed'>{card.description}</p>
							</div>
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Subsidaries;
