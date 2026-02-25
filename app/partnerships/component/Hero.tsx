'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/Container';

const slides = [
	{
		id: 'solar',
		icon: '/KwodraentLogoBlack.png',
		image: '/safety.avif',
		companyTitle: 'Hotel Group',
		desc: 'Reduced electricity costs dramatically with 1.2 MW of rooftop solar. Guests love staying at an eco-friendly hotel.',
	},
	{
		id: 'wind',
		icon: '/KwodraentLogoBlack.png',
		image: '/OILRIG.avif',
		companyTitle: 'Shopping Center',
		desc: 'Achieved energy independence with 2 MW of solar panels. Now generating more clean energy than they use',
	},
	{
		id: 'storage',
		icon: '/KwodraentLogoBlack.png',
		image: '/mountain.avif',
		companyTitle: 'Manufacturing Facility',
		desc: 'Strategic 9.8 MW installation across 11 buildings maximized energy production , space efficiency and clean energy. ',
	},
	{
		id: 'grid',
		icon: '/KwodraentLogoBlack.png',
		image: '/roofsolar.avif',
		companyTitle: 'Residential',
		desc: 'Solar covers 90% of our electricity needs. Even with kids using more devices, our bills stay low.',
	},
];

export default function Hero() {
	const [active, setActive] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActive((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className='w-full bg-white py-12'>
			<Container>
				{/* heading */}
				<h1 className='flex mt-24 items-center gap-3 text-base text-black mb-6'>
					<span className='inline-block w-4 h-0.5 bg-blue-500' />
					Partnership
				</h1>

				<div className='flex flex-col gap-4'>
					<h2 className='text-black text-4xl'>Partnerships</h2>
					<p className='text-black text-base'>Kwo Draent builds strong and sustainable partnerships.</p>
				</div>

				{/* slider */}
				<div className='relative w-full overflow-hidden mt-12'>
					<div
						className='flex transition-transform duration-700 ease-in-out'
						style={{ transform: `translateX(-${active * 100}%)` }}
					>
						{slides.map((slide) => (
							<div
								key={slide.id}
								className='relative w-full h-[480px] shrink-0'
							>
								<Image
									src={slide.image}
									alt='slide'
									fill
									className='object-cover rounded-3xl'
								/>

								{/* text card */}
								<div className='absolute inset-0 flex items-center justify-end px-6 py-64 md:px-16'>
									<div className='bg-white max-w-md p-10 min-h-[360px] rounded-2xl shadow-xl  border-t-4 border-blue-600 flex flex-col'>
										<Image
											src={slide.icon}
											alt='icon'
											width={150}
											height={150}
											className='mb-24'
										/>

										<h2 className='text-black text-2xl mb-4'>{slide.companyTitle}</h2>

										<p className='text-black text-base font-light '>{slide.desc}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* selector */}
				<div className='w-full flex items-center justify-center mt-10 gap-8'>
					{slides.map((slide, index) => (
						<button
							key={slide.id}
							onClick={() => setActive(index)}
							className='w-full flex flex-col items-center gap-4 pb-5 '
						>
							<div
								className={`h-[2px] w-full flex items-center justify-between rounded-full ${
									active === index ? 'bg-black' : 'bg-gray-300'
								}`}
							/>

							<Image
								src={slide.icon}
								alt='icon'
								width={150}
								height={150}
								className={`transition-all duration-300 ${active === index ? 'opacity-100 scale-110' : 'opacity-40'}`}
							/>
						</button>
					))}
				</div>
			</Container>
		</section>
	);
}
