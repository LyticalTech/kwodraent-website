'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import Image from 'next/image';


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
						<Image src='/kwodraent Logo White.png' height={34.2} width={135} alt='kwodraent'/>
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
