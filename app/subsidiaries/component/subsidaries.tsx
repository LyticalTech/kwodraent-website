'use client';

import Container from '../../../components/Container';
import Image from 'next/image';
import Link from 'next/link';
<<<<<<< HEAD
import { GoNorthStar } from 'react-icons/go';
import KwodraentLogo from '@/public/assets/companies_logos/Kwo Draent Energy Darkmode.png';
import XastraLogo from '@/public/assets/companies_logos/Xastra Darkmode.png';
import SchisteLogo from '@/public/assets/companies_logos/SchisteDarkmode (1).png';
import LedenLogo from '@/public/assets/companies_logos/Leden Energy Darkmode.png';
import LyticalLogo from '@/public/assets/companies_logos/Lytical Darkmode.png';
import SwapsLogo from '@/public/assets/companies_logos/SWAPSsyn Darkmode.png';
=======
// import { BoltIcon } from '@heroicons/react/24/outline';
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140

const cards = [
	{
		id: 1,
<<<<<<< HEAD
		icon: KwodraentLogo,
		title: 'Kwodraent Oil & Gas Limited',
		subtitle: 'Strategic Energy Partnerships',
=======
		icon: '/assets/Kwo Draent Energy Darkmode.png',
		subtitle: 'Kwo Draent Energy',
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
		description: 'Unlimited website design requests with fast delivery, ensuring your brand stays modern and professional.',
		image: '/assets/KD group 1.png',
		link: '/',
	},
	{
		id: 2,
<<<<<<< HEAD
		icon: XastraLogo,
		title: 'Xastra Limited',
		subtitle: 'Oil & Gas Support Services',
=======
		icon: '/assets/Xastra Darkmode.png',
		subtitle: 'Xastra',
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
		description: 'Unlimited development tasks, bug fixes, and updates to keep your website fast, secure and scalable.',
		image: '/KD group 2.webp',
		link: '/',
	},
	{
		id: 3,
<<<<<<< HEAD
		icon: SchisteLogo,
		title: 'Schiste Intergrated Energy Services',
		subtitle: 'Marine Operattions & Training',
=======
		icon: '/assets/SchisteDarkmode (1).png',
		subtitle: 'Schiste Intergrated Energy services',
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
		description: 'Continous branding support with unlimited request for logos, guidelines and visual identity updates.',
		image: '/assets/KD group 3.png',
		link: '/',
	},
	{
		id: 4,
<<<<<<< HEAD
		icon: LedenLogo,
		title: 'Leden Energy Limited',
		subtitle: 'Global Energy Ventures',
=======
		icon: '/assets/Leden Energy Darkmode.png',
		subtitle: 'Leden Energy',
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
		description: 'Unlimited ad creatives, social media designs and campaign visuals delivered fast and on brand.',
		image: '/assets/KDgroup4.png',
		link: '/',
	},
	{
		id: 5,
<<<<<<< HEAD
		icon: LyticalLogo,
		title: 'Lytical Technologies Limited',
		subtitle: 'Flagship IT & Digital Solutions',
=======
		icon: '/assets/Lytical Darkmode.png',
		subtitle: 'Lytical Technologies',
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
		description: 'Unlimited UI/UX design requests with ongoing improvements for web apps, dashboards and digital products.',
		image: '/assets/KD group 5.png',
		link: '/',
	},
	{
		id: 6,
<<<<<<< HEAD
		icon: SwapsLogo,
		title: 'SWAPS Synergy Limited',
		subtitle: 'High-Value Projects & Asset Development',
=======
		icon: '/assets/SWAPSsyn Darkmode.png',
		subtitle: 'SWAPS Synergy Ltd',
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
		description: 'Ongoing e-commerce design and development with unlimited requests for updates and improvements.',
		image: '/assets/KD group 6.jpg',
		link: '/',
	},
<<<<<<< HEAD
=======
	{
		id: 7,
		icon: '/assets/Meta Mincrest Darkmode.png',
		subtitle: 'Meta Mincrest',
		description: 'Unlimited website design requests with fast delivery, ensuring your brand stays modern and professional.',
		image: '/assets/KD group 7.jpg',
		link: '/',
	},
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
];

const Subsidaries = () => {
	return (
<<<<<<< HEAD
		<section className='bg-black py-16'>
			<Container>
				{/* TOP SECTION RESPONSIVE */}
				<div className='px-4 flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-6 lg:gap-10'>
					<h1 className='mt-10 md:text-base text-sm text-white flex font-medium items-center gap-2 tracking-wide'>
						<div className='w-4 h-1 bg-blue-600' />
						The Kwo Draent Group
					</h1>

					<p className='text-white max-w-3xl text-[clamp(1.05rem,1.8vw,1.3rem)] leading-[1.5]'>
=======
		<section className='bg-black py-16 md:py-24'>
			<Container>
				{/* TOP SECTION RESPONSIVE */}
				<div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-10'>
					<h1 className='flex items-center gap-3 text-sm md:text-base font-semibold text-white'>
						<span className='inline-block w-4 h-0.5 bg-blue-500' />
						The Kwo Draent Group
					</h1>

					<p className='text-white text-lg font-thin sm:text-xl md:text-2xl lg:text-3xl max-w-3xl '>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
						Explore Orix services designed to elevate brands. From creative design to digital solutions, we craft impactful
						results that drive growth.
					</p>
				</div>
<<<<<<< HEAD
				<div className='px-4'>
					<div className='mt-10 h-px w-full bg-white/20' />
				</div>

				{/* GRID */}
				<div className='px-4 grid grid-auto-fit-lg gap-6 mt-20'>
=======

				{/* GRID */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20'>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
					{cards.map((card) => (
						<Link
							key={card.id}
							href={card.link}
<<<<<<< HEAD
							className='relative group rounded-xl overflow-hidden border border-gray-800 bg-neutral-900 p-6 flex flex-col items-start gap-4 hover:bg-neutral-800 transition duration-300'
=======
							className='group relative rounded-2xl overflow-hidden bg-neutral-900 min-h-[320px] md:min-h-[380px] flex flex-col justify-end p-6'
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
						>
							{/* BG IMAGE */}
							<Image
								src={card.image}
								alt={card.subtitle}
								fill
								className='object-cover opacity-0 group-hover:opacity-100 transition duration-500'
							/>

							{/* DARK OVERLAY */}
<<<<<<< HEAD
							<div className='absolute group inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500' />

							{/* COMPANY LOGO */}
							{/* SMALL ICON */}
							<div className=' z-20 text-gray-400'>
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

							{/* TEXT */}
							<div className='relative z-20'>
								<h2 className='text-xl font-semibold text-white'>{card.title}</h2>
								<h3 className='text-xs text-gray-300 font-light group-hover:text-white leading-relaxed transition duration-500'>
									({card.subtitle})
								</h3>
								<p className='text-base mt-4 text-gray-300 leading-relaxed'>{card.description}</p>
							</div>

=======
							<div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500' />

							{/* SMALL ICON */}
							<div className='absolute top-5 left-5 z-20 text-white'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='size-6'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3'
									/>
								</svg>

								{/* <BoltIcon className='w-5 h-5 md:w-6 md:h-6' /> */}
							</div>

							{/* COMPANY LOGO */}
							<div className='relative z-20 mb-3'>
								<Image
									src={card.icon}
									alt='company'
									width={160}
									height={80}
									className='object-contain'
								/>
							</div>

							{/* TEXT */}
							<div className='relative z-20'>
								<h2 className='text-base md:text-lg font-semibold text-white'>{card.subtitle}</h2>

								<p className='text-xs md:text-sm mt-2 text-gray-300 leading-relaxed'>{card.description}</p>
							</div>

>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
							{/* BASE BG */}
							<div className='absolute inset-0 bg-neutral-900 group-hover:opacity-0 transition duration-500' />
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Subsidaries;
