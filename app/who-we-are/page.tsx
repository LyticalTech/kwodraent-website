'use client'

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import SectionLabel from '@/components/SectionLabel';
import ValueCard from '@/components/ValueCard';
// import Image from 'next/image';
// import solarPanelsImg from '@/assets/solar-panels.webp';

const WhoWeAre = () => {
	const coreValues = [
		{
			number: '01',
			title: 'Expertise',
			description:
				'Deep understanding of the systems we operate in. We know the work, the risks, and have access to the local market.',
		},
		{
			number: '02',
			title: 'Collaboration',
			description: 'Use our free online calculator to see how much solar can save you based on your current electricity bills.',
		},
		{
			number: '03',
			title: 'Execution Certainty',
			description:
				'We pursue high standards in execution, engineering, and delivery. Work is done thoroughly, correctly, and to specification.',
		},
		{
			number: '04',
			title: 'Integrity',
			description: 'Use our free online calculator to see how much solar can save you based on your current electricity bills.',
		},
		{
			number: '05',
			title: 'Innovation',
			description: 'Constantly seeking new ways to improve efficiency and sustainability in energy solutions.',
		},
	];

	const benefits = [
		'Save 60-80% on monthly electricity bills',
		'Use solar during day, grid power at night',
		'Lowest cost option with fastest payback',
	];

	return (
		<>
			<PageHeader
				title='Who We Are'
				subtitle='Kwo Draent operates is your energy solutions partner.'
			/>

			{/* Mission & Vision Section */}
			<section className='bg-white py-20 md:py-32 text-black'>
				<div className='container-custom'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
						{/* Image with Stats */}
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='relative'
						>
							<div className='relative rounded-2xl overflow-hidden'>
								{/* <Image
									src={solarPanelsImg}
									alt='Solar panels'
									className='w-full aspect-[4/5] object-cover'
								/> */}
								{/* Dashed border overlay */}
								<div className='absolute inset-8 border-2 border-dashed border-white/40 rounded-lg pointer-events-none' />

								{/* Stats overlay */}
								<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 w-64'>
									<div className='bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center'>
										<div className='text-4xl font-semibold text-foreground mb-1'>65%</div>
										<div className='text-sm text-muted-foreground'>Reduction in Electricity Costs</div>
									</div>
									<div className='bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center'>
										<div className='text-4xl font-semibold text-foreground mb-1'>90%</div>
										<div className='text-sm text-muted-foreground'>Energy Independence Achieved</div>
									</div>
								</div>
							</div>
						</motion.div>

						{/* Mission Content */}
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<SectionLabel
								text='Mission'
								light
							/>
							<h2 className='text-h2 font-medium text-foreground mb-6'>Our Purpose</h2>
							<p className='text-brand-blue text-lg mb-8'>
								Create sustainable solutions that improve quality of life and meet society&apos;s evolving needs.
							</p>
							<ul className='space-y-4'>
								{benefits.map((benefit) => (
									<li
										key={benefit}
										className='flex items-center gap-3 text-muted-foreground'
									>
										<span className='w-1.5 h-1.5 bg-brand-blue rounded-full' />
										{benefit}
									</li>
								))}
							</ul>
						</motion.div>
					</div>

					{/* Vision Section */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-32'>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='order-2 lg:order-1'
						>
							<SectionLabel
								text='Vision'
								light
							/>
							<h2 className='text-h2 font-medium text-foreground mb-6'>Our Vision</h2>
							<p className='text-brand-blue text-lg mb-8'>
								Lead industry in innovations that advance modern living and a net-zero future.
							</p>
							<ul className='space-y-4'>
								{benefits.map((benefit) => (
									<li
										key={benefit}
										className='flex items-center gap-3 text-muted-foreground'
									>
										<span className='w-1.5 h-1.5 bg-brand-blue rounded-full' />
										{benefit}
									</li>
								))}
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='relative order-1 lg:order-2'
						>
							<div className='relative rounded-2xl overflow-hidden'>
								{/* <Image
									src={solarPanelsImg}
									alt='Solar panels'
									className='w-full aspect-[4/5] object-cover'
								/> */}
								<div className='absolute inset-8 border-2 border-dashed border-white/40 rounded-lg pointer-events-none' />

								<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 w-64'>
									<div className='bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center'>
										<div className='text-4xl font-semibold text-foreground mb-1'>65%</div>
										<div className='text-sm text-muted-foreground'>Reduction in Electricity Costs</div>
									</div>
									<div className='bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center'>
										<div className='text-4xl font-semibold text-foreground mb-1'>90%</div>
										<div className='text-sm text-muted-foreground'>Energy Independence Achieved</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Core Values Section */}
			<section className='bg-black py-20 md:py-32'>
				<div className='container-custom'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-16'
					>
						<h2 className='text-h2 font-medium text-white'>Our Core Values</h2>
					</motion.div>

					<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
						{coreValues.map((value, index) => (
							<ValueCard
								key={value.number}
								number={value.number}
								title={value.title}
								description={value.description}
								delay={index * 0.1}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default WhoWeAre;
