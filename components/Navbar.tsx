'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Image from 'next/image';
import KwoDraentLogoWhite from '../public/Kwodraent Logo White.png';
import KwoDraentLogoBlack from '../public/KwodraentLogoBlack.png';
import { usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [visible, setVisible] = useState(true);
	const [scrolled, setScrolled] = useState(false);

	const pathname = usePathname();
	const isHome = pathname === '/' || pathname === '/what-we-do' || pathname === '/who-we-are';

	const positionRef = useRef(0);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = () => setIsMenuOpen(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.pageYOffset;

			setVisible(positionRef.current > currentY || currentY < 10);
			setScrolled(currentY > 50);

			positionRef.current = currentY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// const isWhiteBg = scrolled;
	const isWhiteBg = !isHome || scrolled;

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
				!visible ? '-translate-y-full' : 'translate-y-0'
			} ${isWhiteBg ? 'bg-white shadow-xs shadow-gray-200 border-b border-gray-100' : 'bg-transparent border-b-[1px] border-[rgba(255,255,255,0.3)]'}`}
		>
			<Container>
				<div className='flex items-center justify-between py-4'>
					{/* Logo */}
					<Link
						href='/'
						onClick={closeMenu}
					>
						<Image
							src={isWhiteBg ? KwoDraentLogoBlack : KwoDraentLogoWhite}
							alt='kwodraent'
							className='h-auto w-30 md:w-37.5 transition-all duration-300'
						/>
					</Link>

					{/* Desktop Nav */}
					<nav className='hidden md:flex items-center gap-10'>
						<div>
							<DropdownMenu>
								<DropdownMenuTrigger
									asChild
									className=''
								>
									<button
										className={`text-[15px] font-medium transition flex items-center gap-1 focus:outline-none cursor-pointer ${
											isWhiteBg ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-300'
										}`}
									>
										Who We Are
										<svg
											className='w-5 h-5 mt-0.5'
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
								</DropdownMenuTrigger>

								<DropdownMenuContent
									align='start'
									sideOffset={8}
									className='bg-black w-48 rounded-xl shadow-2xl px-2 py-3 border border-gray-400'
								>
									<DropdownMenuItem asChild>
										<Link
											href='/who-we-are'
											className='text-white hover:text-gray-300  px-4 py-3'
										>
											About Us
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link
											href='/who-we-are'
											className='text-white hover:text-gray-300  px-4 py-3'
										>
											Values
										</Link>
									</DropdownMenuItem>
									{/* <DropdownMenuItem asChild>
										<Link
											href='/who-we-are'
											className='text-white hover:text-gray-300  px-4 py-3'
										>
											Leadership
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem asChild>
										<Link
											href='/compliance'
											className='text-white hover:text-gray-300  px-4 py-3'
										>
											Compliance
										</Link>
									</DropdownMenuItem> */}
								</DropdownMenuContent>
							</DropdownMenu>
						</div>

						<Link
							href='/what-we-do'
							className={`text-[15px] font-medium transition ${
								isWhiteBg ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-300'
							}`}
						>
							What We Do
						</Link>

						<Link
							href='/subsidiaries'
							className={`text-[15px] font-medium transition ${
								isWhiteBg ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-300'
							}`}
						>
							Subsidiaries
						</Link>

						<Link
							href='/partnerships'
							className={`text-[15px] font-medium transition ${
								isWhiteBg ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-300'
							}`}
						>
							Partnerships
						</Link>
					</nav>

					{/* Contact Button */}
					<Link
						href='/contact'
						className={`hidden md:block px-6 py-2.5 rounded-lg text-sm font-medium transition ${
							isWhiteBg
								? 'bg-blue-600 text-white hover:bg-blue-500'
								: 'border border-white/60 text-white hover:bg-gray-800 duration-500 ease-in-out'
						}`}
					>
						Contact Us
					</Link>

					{/* Mobile Toggle */}
					<button
						onClick={toggleMenu}
						className='md:hidden flex flex-col cursor-pointer gap-1.5'
					>
						<span className={`w-6 h-0.5 transition ${isWhiteBg ? 'bg-black' : 'bg-white'}`} />
						<span className={`w-6 h-0.5 transition ${isWhiteBg ? 'bg-black' : 'bg-white'}`} />
						<span className={`w-6 h-0.5 transition ${isWhiteBg ? 'bg-black' : 'bg-white'}`} />
					</button>
				</div>
			</Container>

			{/* Mobile Menu */}
			<div
				className={`md:hidden fixed inset-x-0 top-20 bg-white shadow-lg transition-all duration-300 ${
					isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
			>
				<nav className='flex flex-col items-center gap-8 py-10'>
					<Link
						href='/who-we-are'
						onClick={closeMenu}
						className='font-medium text-gray-800 hover:text-blue-600 transition'
					>
						Who We Are
					</Link>
					<Link
						href='/what-we-do'
						onClick={closeMenu}
						className='font-medium text-gray-800 hover:text-blue-600 transition'
					>
						What We Do
					</Link>
					<Link
						href='/subsidiaries'
						onClick={closeMenu}
						className='font-medium text-gray-800 hover:text-blue-600 transition'
					>
						Subsidiaries
					</Link>
					<Link
						href='/partnerships'
						onClick={closeMenu}
						className='font-medium text-gray-800 hover:text-blue-600 transition'
					>
						Partnerships
					</Link>
					<Link
						href='/contact'
						onClick={closeMenu}
						className='w-full max-w-60 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-center text-white transition duration-300 rounded-lg'
					>
						Contact Us
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
