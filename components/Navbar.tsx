'use client';

import Link from 'next/link';
import Container from '@/components/Container';

const Navbar = () => {
	return (
		<header className='w-full bg-black border-b border-white/5'>
			<Container>
				<div className='flex items-center justify-between py-6'>
					{/* SECTION 1 — Logo & Name */}
					<Link
						href='/'
						className='flex items-center gap-3'
					>
						<div className='w-10 h-10 bg-linear-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center'>
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
							href='/who-we-are'
							className='text-white text-[15px] hover:text-white/60 transition'
						>
							About Us
						</Link>
						<Link
							href='/what-we-do'
							className='text-white text-[15px] hover:text-white/60 transition'
						>
							Solutions
						</Link>
						<Link
							href='/subsidiaries'
							className='text-white text-[15px] hover:text-white/60 transition'
						>
							Subsidiaries
						</Link>
						<Link
							href='/partnerships'
							className='text-white text-[15px] hover:text-white/60 transition'
						>
							Partnerships
						</Link>
					</nav>

					{/* SECTION 3 — Contact Button */}
					<Link
						href='/contact'
						className='px-5 py-2 rounded-full bg-blue-600 text-white text-[15px] hover:bg-blue-700 transition'
					>
						Contact Us
					</Link>
				</div>
			</Container>
		</header>
	);
};

export default Navbar;
