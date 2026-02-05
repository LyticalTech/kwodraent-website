'use client';
import Link from 'next/link';
import Container from '@/components/Container';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='w-full bg-black border-t border-white/5'>
			<Container>
				<div className=''>
					{/* Main Grid */}
					<div className='flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-x-8 lg:gap-y-0'>
						{/* LEFT — Logo & Description */}
						<div className='lg:col-span-5 space-y-6 py-12 lg:py-16'>
							<Link
								href='/'
								className='flex items-center gap-3'
							>
								<Image
									src='/kwodraent Logo White.png'
									height={34.2}
									width={135}
									alt='kwodraent'
								/>
							</Link>

							<p className='text-white text-[15px] leading-relaxed max-w-md'>
								Stand out with Energy Max — a stunning, premium Framer website template designed for solar and renewable energy
								consultants.
							</p>
						</div>

						{/* DIVIDER */}
						<div className='hidden lg:flex lg:col-span-2 lg:row-span-2 justify-center'>
							<div className='w-px h-full bg-white' />
						</div>

						{/* RIGHT — Navigation & Address */}
						<div className='lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-12 py-12 lg:py-16'>
							{/* NAV */}
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
										className='text-white text-[15px] hover:text-white/70 transition w-fit'
									>
										{label}
									</Link>
								))}
							</nav>

							{/* ADDRESS + SOCIAL */}
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
										1B Ikogosi Close, Osborne Foreshore Estate, Ikoyi, Lagos, Nigeria
									</address>
								</div>

								{/* SOCIAL ICONS */}
								<div className='flex items-center gap-5 pt-2'>
									<a
										href='#'
										aria-label='X'
										className='text-white hover:text-white/70 transition'
									>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 24 24'
										>
											<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z' />
										</svg>
									</a>

									<a
										href='#'
										aria-label='LinkedIn'
										className='text-white hover:text-white/70 transition'
									>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 24 24'
										>
											<path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z' />
										</svg>
									</a>

									<a
										href='#'
										aria-label='YouTube'
										className='text-white hover:text-white/70 transition'
									>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 24 24'
										>
											<path d='M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* BOTTOM — RIGHT Side Only */}
						<div className='lg:col-span-5 lg:col-start-8 mt-12 pt-8 mb-20'>
							<p className='text-white text-sm'>© Copyright 2026 Taclient.ai – All rights reserved.</p>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
