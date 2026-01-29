import Hero from '@/components/Hero';
import Discover from '@/components/Discover';
import AboutUs from '@/components/AboutUs';
import CTASection from "@/components/CTASection";
import ImageCards from '@/components/ImageCards';

export default function Home() {
	return (
		<main className='w-full text-black'>
			<Hero />
			<Discover />
			<AboutUs/>
			<CTASection/>
			<ImageCards/>
		</main>
	);
}
