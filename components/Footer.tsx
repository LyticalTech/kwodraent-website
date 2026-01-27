'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='w-full bg-black border-t border-white/5'>
			<div className='w-full mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-12 lg:py-16'>
				{/* Main Footer Content - Three Column Layout */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16'>
					{/* Column 1: Logo & Description */}
					<div className='space-y-6 lg:pr-8'>
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

						<p className='text-white/60 text-[15px] leading-relaxed max-w-md'>
							Stand out with Energy Max — a stunning, premium Framer website template designed for solar and renewable energy
							consultants.
						</p>
					</div>

					<div className='flex justify-between'>
						{/* Column 2: Navigation */}
						<div className='lg:pl-8'>
							<nav className='flex flex-col gap-3'>
								<Link
									href='#home'
									className='text-white/60 hover:text-white text-[15px] transition-colors duration-200 w-fit'
								>
									Home
								</Link>
								<Link
									href='#who-we-are'
									className='text-white/60 hover:text-white text-[15px] transition-colors duration-200 w-fit'
								>
									Who We Are
								</Link>
								<Link
									href='#what-we-do'
									className='text-white/60 hover:text-white text-[15px] transition-colors duration-200 w-fit'
								>
									What We Do
								</Link>
								<Link
									href='#sustainability'
									className='text-white/60 hover:text-white text-[15px] transition-colors duration-200 w-fit'
								>
									Sustainability
								</Link>
								<Link
									href='#contact'
									className='text-white/60 hover:text-white text-[15px] transition-colors duration-200 w-fit'
								>
									Contact Us
								</Link>
							</nav>
						</div>

						{/* Column 3: Headquarters & Social */}
						<div className='space-y-8'>
							<div>
								<h3 className='text-white font-semibold text-[15px] mb-3'>Global Headquaters</h3>
								<address className='not-italic text-white/60 text-[15px] leading-relaxed'>
									1234 Conductor Way, Mableton, Georgia, United States Of America
								</address>
							</div>

							<div>
								<h3 className='text-white font-semibold text-[15px] mb-3'>Africa Headquaters</h3>
								<address className='not-italic text-white/60 text-[15px] leading-relaxed'>
									1B Ikogosi Close, Osborne Foreshore Estate, Ikoyi, Lagos, Nigeria.
								</address>
							</div>

							{/* Social Icons */}
							<div className='flex items-center gap-4'>
								<a
									href='#'
									className='text-white/60 hover:text-white transition-colors duration-200'
									aria-label='X (Twitter)'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
									</svg>
								</a>
								<a
									href='#'
									className='text-white/60 hover:text-white transition-colors duration-200'
									aria-label='LinkedIn'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' />
									</svg>
								</a>
								<a
									href='#'
									className='text-white/60 hover:text-white transition-colors duration-200'
									aria-label='YouTube'
								>
									<svg
										className='w-5 h-5'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section - Copyright and Badge */}
				<div className='mt-12 lg:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='text-white/40 text-sm'>© Copyright 2026 Taclient.ai - All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
