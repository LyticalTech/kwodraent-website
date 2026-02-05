import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: '404 - Page Not Found',
};

export default function NotFound() {
	return (
		<section 
			className='w-full h-screen bg-cover bg-center flex items-center justify-center'
			style={{ backgroundImage: "url('/mountain.avif')" }}
		>
			<div className='border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center p-8'>
				<div className='bg-white w-100 h-80 rounded-2xl p-10 max-w-md text-center'>
					<h1 className='text-8xl font-bold mb-4 text-black'>404</h1>
					<p className='mb-6 text-gray-700'>Oops, the page you are looking for does not exist</p>
					
					<Link 
						href='/' 
						className='inline-block px-6 py-2 border-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors'
					>
						Back to home
					</Link>
				</div>
			</div>
		</section>
	);
}