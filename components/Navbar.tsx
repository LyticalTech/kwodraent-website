'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='w-full bg-black border-b border-white/5'>
			<div className='mx-auto px-4 sm:px-6 lg:px-6 xl:px-24 py-6'>
				{/* MAIN ROW */}
				<div className='flex items-center justify-between'>
					{/* SECTION 1 — Logo & Name */}
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

					{/* SECTION 2 — Navigation */}
					<nav className='hidden md:flex items-center gap-8'>
						<Link
							href='#about'
							className='text-white text-[15px] hover:text-white/60 transition'
						>
							About Us
						</Link>
						<Link
							href='#solutions'
							className='text-white text-[15px] hover:text-white/60 transition'
						>
							Solutions
						</Link>
						<Link
							href='#subsidiaries'
							className='text-white text-[15px] hover:text-white/60 transition'
						>
							Subsidiaries
						</Link>
						<Link
							href='#partnerships'
							className='text-white text-[15px] hover:text-white/60 transition'
						>
							Partnerships
						</Link>
					</nav>

					{/* SECTION 3 — Contact Button */}
					<Link
						href='#contact'
						className='text-white text-[15px] bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-md'
					>
						Contact Us
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
