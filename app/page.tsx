import Hero from '@/components/Hero';
import Discover from '@/components/Discover';
import Functions from '@/components/who-we-are/Functions';

export default function Home() {
	return (
		<main className='w-full text-black'>
			<Hero />
			<Discover />
			<Functions />
		</main>
	);
}
