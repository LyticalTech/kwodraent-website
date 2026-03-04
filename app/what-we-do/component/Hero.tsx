'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/customAccordion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import WhoWeAreOne from '@/public/assets/whoWeAre1.jpg';
import WhoWeAreTwo from '@/public/assets/whoWeAre2.jpg';
import WhoWeAreThree from '@/public/assets/whoWeAre3.jpg';
import WhoWeAreFour from '@/public/assets/whoWeAre4.jpg';
import type { StaticImageData } from 'next/image';

type ServiceItem = {
	value: string;
	title: string;
	description: string;
	tags?: string[];
	image: StaticImageData;
};

const items: ServiceItem[] = [
	{
		value: 'asset',
		title: 'Asset Development & Delivery',
		description:
			'From concept to commissioning. Technical design, project management, and drilling support delivered with capital discipline.',
		tags: ['Asset development & management', 'Project management', 'Drilling & drilling support'],
		image: WhoWeAreOne,
	},
	{
		value: 'operations',
		title: 'Operations & Performance',
		description:
			'Safe, reliable asset execution. We maintain uptime and extend asset life through structured operational standards.',
		tags: ['Operations & maintenance', 'Marine services'],
		image: WhoWeAreTwo,
	},
	{
		value: 'supply',
		title: 'Supply Chain & Logistics Integration',
		description: 'One execution layer across vendors, procurement, and marine logistics. Less friction, lower cost.',
		tags: ['Supply chain', 'Marine logistics'],
		image: WhoWeAreThree,
	},
	{
		value: 'digital',
		title: 'Capability & Digital Enablement',
		description:
			'Skilled workforce combined with digital systems and technology to drive measurable performance gains across every operation.',
		tags: ['Manpower & training', 'Digital transformation'],
		image: WhoWeAreFour,
	},
];

const Hero = () => {
	const [active, setActive] = useState('asset');
	const activeItem = items.find((item) => item.value === active);

	return (
		<section className='w-full bg-black py-12'>
			<div className='max-w-5xl mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className='flex flex-col items-start mt-24 gap-6 mb-8'
				>
					<h2 className='text-sm text-white flex font-medium items-center gap-2 tracking-wide '>
						<div className='w-4 h-1 bg-blue-600 ' />
						What We Do
					</h2>

					{/* content row */}
					<div className='flex flex-col w-full'>
						<h3 className='text-white text-[clamp(2.6rem,3vw,6rem)] leading-[1.05] font-semibold tracking-tight mb-4'>
							Advancing energy development.
						</h3>

						<p className='text-[clamp(1.5rem,1.3vw,3rem)] text-white leading-relaxed'>
							We are your energy solutions partner and we operate across four integrated pillars:
						</p>
					</div>
					<div className='h-px w-full bg-gray-400' />
					<div></div>
					<div className='grid lg:grid-cols-2 gap-14 items-start bg-black text-white py-10 rounded-2xl'>
						{/* LEFT SIDE */}
						<Accordion
							type='single'
							collapsible
							value={active}
							onValueChange={(val) => val && setActive(val)}
							className='w-full space-y-4'
						>
							{items.map((item) => {
								const isActive = active === item.value;

								return (
									<AccordionItem
										key={item.value}
										value={item.value}
										className={cn('border-b border-white/20 transition-all', isActive && ' rounded-lg')}
									>
										<AccordionTrigger
											className={cn(
												'w-full px-6 py-4 mb-2 text-left text-lg font-medium hover:no-underline flex justify-between',
												isActive && 'text-white bg-blue-600'
											)}
										>
											{item.title}
										</AccordionTrigger>

										<AccordionContent className='p-4 pb-6 text-white/80'>
											<p className='mb-4'>{item.description}</p>

											{item.tags && (
												<div className='flex gap-3 flex-wrap'>
													{item.tags.map((tag) => (
														<button
															key={tag}
															className='border border-white/40 px-4 py-2.5 rounded-md text-xs hover:bg-white hover:text-black transition'
														>
															{tag}
														</button>
													))}
												</div>
											)}
										</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>

						{/* RIGHT SIDE IMAGE */}
						<div className='relative w-full h-125 rounded-2xl overflow-hidden transition duration-700'>
							{activeItem && (
								<Image
									key={activeItem.value}
									src={activeItem.image}
									alt={activeItem.title}
									fill
									className='w-full aspect-auto object-cover object-center '
									priority
								/>
							)}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
