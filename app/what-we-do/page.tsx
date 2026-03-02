import ServicesSection from './component/ ServicesSection';
import Approach from './component/Approach';
import Categories from './component/Categories';
import Hero from './component/Hero';
import ImageSection from './component/ImageSection';
import OurApproach from './component/OurApproach';

export default function AboutUS() {
	return (
		<main className='w-full text-black'>
			<Hero />
			<OurApproach />
			{/* <ServicesSection /> */}
			{/* <Categories /> */}
			{/* <Approach /> */}
			<ImageSection />
		</main>
	);
}
