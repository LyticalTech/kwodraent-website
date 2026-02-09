'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className='w-full bg-black border-b border-white/5 overflow-x-hidden'>
			<Container>
				<div className='flex items-center justify-between py-4 md:py-6'>
					{/* SECTION 1 — Logo & Name */}
					<Link
						href='/'
						className='flex items-center gap-3 z-50 flex-shrink-0'
						onClick={closeMenu}
					>
						<Image
							src='/kwodraent Logo White.png'
							height={34.2}
							width={135}
							alt='kwodraent'
							className='h-auto w-[100px] md:w-[135px]'
						/>
					</Link>

					{/* SECTION 2 — Navigation (Desktop) */}
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

					{/* SECTION 3 — Contact Button (Desktop) */}
					<Link
						href='/contact'
						className='hidden md:block px-5 py-2 rounded-full bg-blue-600 text-white text-[15px] hover:bg-blue-700 transition flex-shrink-0'
					>
						Contact Us
					</Link>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className='md:hidden z-50 flex flex-col gap-1.5 w-6 h-6 justify-center flex-shrink-0'
						aria-label='Toggle menu'
					>
						<span
							className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
						/>
						<span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
						<span
							className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
						/>
					</button>
				</div>
			</Container>

			{/* Mobile Navigation Menu */}
			<div
				className={`md:hidden fixed left-0 right-0 bg-black z-40 transition-all duration-300 overflow-x-hidden ${
					isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				style={{ top: '30px' }} // Adjust based on your navbar height
			>
				<nav className='flex flex-col items-center gap-8 pt-12 pb-8 px-6 w-full'>
					<Link
						href='/who-we-are'
						className='text-white text-lg hover:text-white/60 transition'
						onClick={closeMenu}
					>
						About Us
					</Link>
					<Link
						href='/what-we-do'
						className='text-white text-lg hover:text-white/60 transition'
						onClick={closeMenu}
					>
						Solutions
					</Link>
					<Link
						href='/subsidiaries'
						className='text-white text-lg hover:text-white/60 transition'
						onClick={closeMenu}
					>
						Subsidiaries
					</Link>
					<Link
						href='/partnerships'
						className='text-white text-lg hover:text-white/60 transition'
						onClick={closeMenu}
					>
						Partnerships
					</Link>
					<Link
						href='/contact'
						className='mt-4 px-6 py-3 rounded-full bg-blue-600 text-white text-[15px] hover:bg-blue-700 transition'
						onClick={closeMenu}
					>
						Contact Us
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
