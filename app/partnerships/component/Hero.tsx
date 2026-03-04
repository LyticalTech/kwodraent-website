'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import PotentisLogo from '@/public/assets/potentislightModeLogo-removebg-preview.png';
import MetaMincrestLogo from '@/public/assets/metaMincrestLightModeLogo-removebg-preview.png';

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';

const slides = [
	{
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
			api.scrollNext();
		}, 5000);

		return () => clearInterval(interval);
	}, [api]);

	return (
		<section className='w-full bg-white py-12'>
			<Container>
				<h1 className='mt-16 mb-4 text-sm text-gray-800 flex font-medium items-center gap-2 tracking-wide'>
					<div className='w-4 h-1 bg-blue-600' />
					Partnership
				</h1>

				<div className='flex flex-col w-full items-start'>
					<h2 className='text-[clamp(2.6rem,3.8vw,6rem)] text-gray-800 leading-[1.05] tracking-tight'>Partnerships</h2>
					<p className='mt-6 max-w-5xl text-[clamp(1.05rem,1.5vw,1.3rem)] text-gray-700 leading-[1.5]'>
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
								<div className='relative w-full h-[400px] md:h-[350px]'>
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
			</Container>
		</section>
	);
};

export default Hero;
