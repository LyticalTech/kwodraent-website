'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import PotentisLogo from '@/public/assets/potentislightModeLogo-removebg-preview.png';
import MetaMincrestLogo from '@/public/assets/metaMincrestLightModeLogo-removebg-preview.png';

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const slides = [
	{
<<<<<<< HEAD
		id: 'potentis_energy',
		image: '/safety.avif',
		logo: PotentisLogo,
		title: 'Potentis Energy',
		companyTitle: 'Potentis Energy',
		desc: 'Potentis Energy Limited is our Namibia-based joint venture partiner supporting emerging energy initiatives in Southern Africa. Through shared expertise, regional knowledge, and alighned execution, we collaborate to unlock scalable, sustainable energy opportunities.',
	},
	{
		id: 'meta_mincrest',
		image: '/safety.avif',
		logo: MetaMincrestLogo,
		title: 'Meta Mincrest',
		companyTitle: 'Meta Mincrest',
		desc: 'Meta Mincrest is Our United States-based partner working alongside Kwodraent to originate and advance Africa-linked opportunities. Together, we combine global networks and local insights to identify, structure, and mature high-potential ventures across key markets.',
	},
];

const Hero = () => {
	const [api, setApi] = useState<CarouselApi>();
	const [active, setActive] = useState(0);

	// update active index
=======
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

>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
	useEffect(() => {
		if (!api) return;

		const onSelect = () => {
			setActive(api.selectedScrollSnap());
		};

		api.on('select', onSelect);

		return () => {
			api.off('select', onSelect);
		};
	}, [api]);

	// auto slide
	useEffect(() => {
		if (!api) return;

		const interval = setInterval(() => {
<<<<<<< HEAD
			api.scrollNext();
		}, 5000);

		return () => clearInterval(interval);
	}, [api]);
=======
			setActive((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140

	return (
		<section className='w-full bg-white py-12'>
			<Container>
<<<<<<< HEAD
				<h1 className='mt-16 mb-4 text-sm text-gray-800 flex font-medium items-center gap-2 tracking-wide'>
					<div className='w-4 h-1 bg-blue-600' />
					Partnership
				</h1>

				<div className='flex flex-col w-full items-start'>
					<h2 className='text-[clamp(2rem,3vw,4rem)] text-gray-800 font-semibold'>Partnerships</h2>

					<p className='text-gray-800 text-[clamp(1.2rem,1.2vw,2.5rem)] leading-snug max-w-5xl'>
						We are proud to collaborate with partners whose expertise and regional strength expand what we can achieve together
					</p>
				</div>

				{/* ✅ SHADCN CAROUSEL */}
				<Carousel
					setApi={setApi}
					opts={{
						loop: true,
					}}
					className='w-full mt-12'
				>
					<CarouselContent>
						{slides.map((slide) => (
							<CarouselItem key={slide.id}>
								<div className='relative w-full h-[350px]'>
									<Image
										src={slide.image}
										alt={slide.title}
										fill
										className='aspect-auto object-cover rounded-4xl'
									/>

									{/* overlay */}
									<div className='absolute inset-0 flex items-center justify-end px-6 md:px-16'>
										<div className='bg-white max-w-md p-8 rounded-2xl shadow-xl border-t-8 border-blue-600'>
											<Image
												src={slide.logo}
												alt={slide.title}
												width={150}
												height={40}
												className='mb-4'
											/>
											<h1 className='text-2xl font-bold text-gray-800 mb-2'>{slide.title}</h1>
											<p className='text-gray-600 text-sm font-medium'>{slide.desc}</p>
										</div>
=======
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
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				{/* ✅ SELECTOR */}
				<div className='w-full px-4 flex items-center justify-center mt-10 gap-6'>
					{slides.map((slide, index) => (
						<button
							key={slide.id}
							onClick={() => api?.scrollTo(index)}
							className='flex w-full flex-col items-center gap-4 transition pb-5'
						>
							<div className={`h-[2px] w-full transition ${active === index ? 'bg-black' : 'bg-gray-300'}`} />
							<div className={`h-12 ${active === index ? 'opacity-100' : 'opacity-40'}`}>
								<Image
									src={slide.logo}
									alt={slide.title}
									width={150}
									height={40}
									className=''
								/>
							</div>
						</button>
					))}
				</div>
<<<<<<< HEAD
=======

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
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
			</Container>
		</section>
	);
}
