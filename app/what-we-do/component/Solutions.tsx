'use client';

import React, { useRef } from 'react';

interface SolutionCard {
	icon: React.ReactNode;
	title: string;
	description: string;
	illustration: React.ReactNode;
}

const Solutions = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const solutions: SolutionCard[] = [
		{
			icon: (
				<svg
					className='w-12 h-12'
					viewBox='0 0 48 48'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.5'
				>
					<rect
						x='12'
						y='22'
						width='10'
						height='6'
						rx='1'
					/>
					<rect
						x='26'
						y='22'
						width='10'
						height='6'
						rx='1'
					/>
					<path d='M8 28h32M16 28v-6M32 28v-6' />
					<circle
						cx='10'
						cy='32'
						r='2'
					/>
					<circle
						cx='38'
						cy='32'
						r='2'
					/>
				</svg>
			),
			title: 'Manpower & Training',
			description: 'Our Green Freight Solution is designed to help businesses minimize their environmental.',
			illustration: (
				<svg
					className='w-full h-32 opacity-20'
					viewBox='0 0 280 120'
					fill='none'
					stroke='currentColor'
					strokeWidth='1'
				>
					<path d='M20 80h240M20 80c0-8 8-16 20-16h200c12 0 20 8 20 16' />
					<rect
						x='100'
						y='50'
						width='60'
						height='30'
						rx='2'
					/>
					<rect
						x='170'
						y='45'
						width='70'
						height='35'
						rx='2'
					/>
					<circle
						cx='80'
						cy='90'
						r='8'
					/>
					<circle
						cx='200'
						cy='90'
						r='8'
					/>
					<circle
						cx='250'
						cy='90'
						r='8'
					/>
				</svg>
			),
		},
		{
			icon: (
				<svg
					className='w-12 h-12'
					viewBox='0 0 48 48'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.5'
				>
					<path
						d='M24 12l-8 8 8 8'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<circle
						cx='24'
						cy='20'
						r='3'
						fill='currentColor'
					/>
					<path
						d='M16 20c0 6 4 12 8 16 4-4 8-10 8-16'
						strokeLinecap='round'
					/>
				</svg>
			),
			title: 'Energy Procurement & Construction',
			description: 'Cut down on miles and emissions through data-driven route optimization.',
			illustration: (
				<svg
					className='w-full h-32 opacity-20'
					viewBox='0 0 280 120'
					fill='none'
					stroke='currentColor'
					strokeWidth='1'
				>
					<circle
						cx='60'
						cy='80'
						r='6'
					/>
					<path
						d='M66 80h20M90 70v20h80v-20h-80z'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<circle
						cx='110'
						cy='100'
						r='8'
					/>
					<circle
						cx='150'
						cy='100'
						r='8'
					/>
					<path
						d='M80 75l-6-10h-8'
						strokeLinecap='round'
					/>
				</svg>
			),
		},
		{
			icon: (
				<svg
					className='w-12 h-12'
					viewBox='0 0 48 48'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.5'
				>
					<rect
						x='14'
						y='18'
						width='10'
						height='16'
						rx='1'
					/>
					<rect
						x='26'
						y='14'
						width='8'
						height='20'
						rx='1'
					/>
					<path
						d='M20 14v-2l2-2 2 2v2'
						strokeLinecap='round'
					/>
					<line
						x1='18'
						y1='24'
						x2='18'
						y2='28'
						strokeWidth='2'
					/>
					<line
						x1='30'
						y1='20'
						x2='30'
						y2='24'
						strokeWidth='2'
					/>
				</svg>
			),
			title: 'Energy Development',
			description: 'Eco-focused fleet operations for better sustainability control.',
			illustration: (
				<svg
					className='w-full h-32 opacity-20'
					viewBox='0 0 280 120'
					fill='none'
					stroke='currentColor'
					strokeWidth='1'
				>
					<path
						d='M60 90l20-30 15 10 25-25 20 15 30-20'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
					<rect
						x='100'
						y='75'
						width='15'
						height='15'
					/>
					<rect
						x='130'
						y='70'
						width='20'
						height='20'
					/>
					<rect
						x='160'
						y='65'
						width='25'
						height='25'
					/>
					<path d='M200 60l10-15v-10h5l5 5v15' />
				</svg>
			),
		},
		{
			icon: (
				<svg
					className='w-12 h-12'
					viewBox='0 0 48 48'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.5'
				>
					<path
						d='M24 16c0 0-4 2-6 6-2 4 0 8 4 10 4 2 8 0 10-4 2-4 0-8-4-10'
						strokeLinecap='round'
					/>
					<circle
						cx='24'
						cy='24'
						r='2'
						fill='currentColor'
					/>
					<path
						d='M24 22v-6M22 24h-6M24 26v6M26 24h6'
						strokeWidth='1'
					/>
				</svg>
			),
			title: 'Asset Management',
			description: 'We offer responsible logistics that minimize pollution and maximize operational efficiency.',
			illustration: (
				<svg
					className='w-full h-32 opacity-20'
					viewBox='0 0 280 120'
					fill='none'
					stroke='currentColor'
					strokeWidth='1'
				>
					<rect
						x='50'
						y='65'
						width='35'
						height='25'
						rx='3'
					/>
					<circle
						cx='67'
						cy='100'
						r='6'
					/>
					<path d='M90 75h15v-10h-15zM110 75l5-5 5 5' />
					<rect
						x='200'
						y='70'
						width='20'
						height='20'
						rx='2'
					/>
					<line
						x1='210'
						y1='75'
						x2='210'
						y2='85'
						strokeWidth='2'
					/>
				</svg>
			),
		},
	];

	const scroll = (direction: 'left' | 'right') => {
		if (scrollRef.current) {
			const scrollAmount = 400;
			scrollRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	return (
		<section className='w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#212121] text-white overflow-hidden'>
			<div className='max-w-7xl mx-auto'>
				{/* Header */}
				<div className='flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 md:mb-16'>
					<div className='max-w-2xl'>
						<div className='flex items-center gap-2 mb-4'>
            <h1 className="flex items-center gap-3 text-base font-semibold text-white mb-6">
            <span className="inline-block w-4 h-0.5 bg-blue-500" />{''}
            Our Solutions
          </h1>
						</div>
						<h2 className='text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold leading-tight mb-2'>
							Clean mobility &<br />
							supply chain <span className='text-[#7ed957]'>services</span>
						</h2>
					</div>

					{/* Navigation Arrows */}
					<div className='hidden sm:flex gap-3 shrink-0'>
						<button
							onClick={() => scroll('left')}
							className='w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 group'
							aria-label='Scroll left'
						>
							<svg
								className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
								viewBox='0 0 20 20'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path
									d='M12 5L7 10L12 15'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						<button
							onClick={() => scroll('right')}
							className='w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 hover:border-gray-600 transition-all duration-200 group'
							aria-label='Scroll right'
						>
							<svg
								className='w-5 h-5 text-gray-400 group-hover:text-white transition-colors'
								viewBox='0 0 20 20'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path
									d='M8 5L13 10L8 15'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Scrollable Cards Container */}
				<div className='relative -mx-4 sm:mx-0'>
					{/* Gradient Overlays */}
					<div className='hidden sm:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[] to-transparent z-10 pointer-events-none' />
					<div className='hidden sm:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[] to-transparent z-10 pointer-events-none' />

					{/* Cards */}
					<div
						ref={scrollRef}
						className='flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 sm:px-0 snap-x snap-mandatory'
						style={{
							scrollbarWidth: 'none',
							msOverflowStyle: 'none',
						}}
					>
						{solutions.map((solution, index) => (
							<article
								key={index}
								className='flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] bg-[#1a1a1a] rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 snap-start group overflow-hidden'
							>
								<div className='p-6 md:p-8 flex flex-col h-full'>
									{/* Icon */}
									<div className='text-[#7ed957] mb-6'>{solution.icon}</div>

									{/* Title */}
									<h3 className='text-xl md:text-2xl font-semibold mb-3 leading-tight'>{solution.title}</h3>

									{/* Description */}
									<p className='text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow'>{solution.description}</p>

									{/* CTA Button */}
									<button className='inline-flex items-center gap-2 text-white text-sm md:text-base font-medium group-hover:gap-3 transition-all duration-200 self-start px-4 py-2 rounded-full hover:bg-[#7ed957] hover:text-black'>
										View detail
										<svg
											className='w-4 h-4'
											viewBox='0 0 16 16'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
										>
											<path
												d='M6 3L11 8L6 13'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</button>
								</div>

								{/* Illustration */}
								<div className='px-6 pb-6 md:px-8 md:pb-8'>
									<div className='w-full bg-[#111111] rounded-xl p-4 border border-gray-800'>{solution.illustration}</div>
								</div>
							</article>
						))}
					</div>
				</div>

				{/* Mobile Scroll Indicator */}
				<div className='flex sm:hidden justify-center gap-2 mt-6'>
					{solutions.map((_, index) => (
						<div
							key={index}
							className='w-1.5 h-1.5 rounded-full bg-gray-700 transition-all duration-300'
							aria-hidden='true'
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Solutions;
