import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
	title: 'Kwo Draent',
	description:
		'We’ve been at the forefront of subsea for decades, because we put our customers first. Here are some of the ways we can help you.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
