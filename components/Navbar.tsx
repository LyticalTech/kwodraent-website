'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<header className='w-full bg-white border-b border-black/10 fixed top-0 left-0 z-50'>
			<Container>
				<div className='flex items-center justify-between py-4 md:py-6 relative'>
					{/* Logo */}
					<Link
						href='/'
						onClick={closeMenu}
						className='flex items-center gap-3 z-50 flex-shrink-0'
					>
						<Image
							src='/KwodraentLogoBlack.png'
							height={34.2}
							width={135}
							alt='kwodraent'
							className='h-auto w-[100px] md:w-[135px]'
						/>
					</Link>

					{/* Desktop nav */}
					<nav className='hidden md:flex items-center gap-8'>
						<div className='relative group'>
							<Link href='/who-we-are'>
								<button className='flex items-center gap-1 text-black text-[15px] hover:text-gray-500 transition'>
									Who We Are
									<svg
										className='w-3 h-3 mt-[2px]'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
							</Link>

							<div className='absolute left-0 top-full mt-3 w-40 bg-black rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 z-50'>
								<Link
									href='/who-we-are'
									className='block px-5 py-2 text-white hover:text-gray-300'
								>
									About Us
								</Link>
								<Link
									href='/who-we-are'
									className='block px-5 py-2 text-white hover:text-gray-300'
								>
									Values
								</Link>
								<Link
									href='/who-we-are'
									className='block px-5 py-2 text-white hover:text-gray-300'
								>
									Leadership
								</Link>
								<Link
									href='/compliance'
									className='block px-5 py-2 text-white hover:text-gray-300'
								>
									Compliance
								</Link>
							</div>
						</div>

						<Link
							href='/what-we-do'
							className='text-black text-[15px] hover:text-gray-500 transition'
						>
							What We Do
						</Link>
						<Link
							href='/subsidiaries'
							className='text-black text-[15px] hover:text-gray-500 transition'
						>
							Subsidiaries
						</Link>
						<Link
							href='/partnerships'
							className='text-black text-[15px] hover:text-gray-500 transition'
						>
							Partnerships
						</Link>
					</nav>

					{/* Desktop contact */}
					<Link
						href='/contact'
						className='hidden md:block px-5 py-2 rounded-xl bg-blue-600 text-white text-[15px] hover:bg-blue-700 transition flex-shrink-0'
					>
						Contact Us
					</Link>

					{/* Hamburger */}
					<button
						onClick={toggleMenu}
						className='md:hidden z-50 flex flex-col gap-1.5 w-6 h-6 justify-center'
						aria-label='Toggle menu'
					>
						<span
							className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
						/>
						<span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
						<span
							className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
						/>
					</button>
				</div>
			</Container>

			{/* Mobile Menu */}
		{/* Mobile Menu */}
<div
  className={`md:hidden fixed left-0 right-0 bg-black text-white transition-all duration-300 overflow-hidden ${
    isMenuOpen ? 'h-screen opacity-100 visible' : 'h-0 opacity-0 invisible'
  } top-[64px]`}
>
  <nav className='flex flex-col items-center gap-6 pt-12 pb-8 px-6 w-full'>

    {/* WHO WE ARE */}
    <Link
      href='/who-we-are'
      onClick={closeMenu}
      className='text-lg hover:text-white/60 transition'
    >
      Who We Are
    </Link>

    {/* Sub links */}
    <div className='flex flex-col items-center gap-4 -mt-2 mb-2'>
      <Link
        href='/who-we-are'
        onClick={closeMenu}
        className='text-sm text-white/80 hover:text-white transition'
      >
        About Us
      </Link>

      <Link
        href='/who-we-are'
        onClick={closeMenu}
        className='text-sm text-white/80 hover:text-white transition'
      >
        Values
      </Link>

      <Link
        href='/who-we-are'
        onClick={closeMenu}
        className='text-sm text-white/80 hover:text-white transition'
      >
        Leadership
      </Link>

      <Link
        href='/compliance'
        onClick={closeMenu}
        className='text-sm text-white/80 hover:text-white transition'
      >
        Compliance
      </Link>
    </div>

    {/* OTHER LINKS */}
    <Link
      href='/what-we-do'
      onClick={closeMenu}
      className='text-lg hover:text-white/60 transition'
    >
      What We Do
    </Link>

    <Link
      href='/subsidiaries'
      onClick={closeMenu}
      className='text-lg hover:text-white/60 transition'
    >
      Subsidiaries
    </Link>

    <Link
      href='/partnerships'
      onClick={closeMenu}
      className='text-lg hover:text-white/60 transition'
    >
      Partnerships
    </Link>

    <Link
      href='/contact'
      onClick={closeMenu}
      className='mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white text-[15px] hover:bg-blue-700 transition'
    >
      Contact Us
    </Link>

  </nav>
</div>

		</header>
	);
};

export default Navbar;
