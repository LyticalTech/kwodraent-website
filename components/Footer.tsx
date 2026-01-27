'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='w-full bg-black border-t border-white/5'>
			<div className='w-full mx-auto px-4 sm:px-6 lg:px-6 xl:px-24 py-12 lg:py-16'>
				{/* Main Grid */}
				<div className='flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-8 lg:gap-y-0'>
					{/* LEFT — Logo & Description */}
					<div className='lg:col-span-5 space-y-6 lg:pr-12'>
						<Link
							href='/'
							className='flex items-center gap-3'
						>
							<div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center'>
								<svg
									className='w-6 h-6 text-white'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2.5'
								>
									<path
										d='M13 2L3 14h9l-1 8 10-12h-9l1-8z'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
							<span className='text-2xl font-normal text-white'>Kwo Draent</span>
						</Link>

						<p className='text-white text-[15px] leading-relaxed max-w-md'>
							Stand out with Energy Max — a stunning, premium Framer website template designed for solar and renewable energy
							consultants.
						</p>
					</div>

					{/* DIVIDER — FULL HEIGHT, NO GAP */}
					<div className='hidden lg:flex lg:col-span-2 lg:row-span-2 justify-center'>
						<div className='w-px h-full bg-white/10' />
					</div>

					{/* RIGHT — Navigation & Address */}
					<div className='lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-12'>
						<nav className='flex flex-col space-y-3 md:pt-1'>
							{[
								['Home', '#home'],
								['Who We Are', '#who-we-are'],
								['What We Do', '#what-we-do'],
								['Sustainability', '#sustainability'],
								['Contact Us', '#contact'],
							].map(([label, href]) => (
								<Link
									key={label}
									href={href}
									className='text-white text-[15px] hover:text-white/60 transition w-fit'
								>
									{label}
								</Link>
							))}
						</nav>

						<div className='space-y-8 md:pt-1'>
							<div>
								<h3 className='text-white font-semibold text-[15px] mb-2'>Global Headquarters</h3>
								<address className='not-italic text-white/80 text-[15px] leading-relaxed'>
									1234 Conductor Way, Mableton, Georgia, USA
								</address>
							</div>

							<div>
								<h3 className='text-white font-semibold text-[15px] mb-2'>Africa Headquarters</h3>
								<address className='not-italic text-white/80 text-[15px] leading-relaxed'>
									1B Ikogosi Close, Osborne Foreshore Estate, Ikoyi, Lagos, Nigeria.
								</address>
							</div>
						</div>
					</div>

					{/* BOTTOM — RIGHT SIDE ONLY */}
					<div className='lg:col-span-5 lg:col-start-8 mt-12 pt-8'>
						<p className='text-white/40 text-sm'>© Copyright 2026 Taclient.ai – All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
