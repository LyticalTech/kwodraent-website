
import CTASection from "@/components/CTASection";
import ServicesSection from "./component/ ServicesSection";
import Approach from "./component/Approach";
import Categories from "./component/Categories";
import Hero from "./component/Hero";
import ImageSection from "./component/ImageSection";

export default function AboutUS() {
	return (
		<main className='w-full text-black'>
            <Hero />
			<ServicesSection />
			<Categories/>
			<Approach/>
			<ImageSection/>
			<CTASection/>
		</main>
	);
}
