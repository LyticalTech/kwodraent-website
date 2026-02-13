import Hero from '@/components/Hero';
import Discover from '@/components/Discover';
import Functions from '@/components/who-we-are/Functions';
import CTASection from "@/components/CTASection";


export default function Home() {
	return (
		<main className='w-full text-black'>
			<Hero />
			<Discover />
			<Functions />
			
			<CTASection/>
			
		</main>
	);
}
