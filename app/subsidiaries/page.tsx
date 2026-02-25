import Description from './component/Sub-Description';
import Hero from './component/Hero';
import Subsidaries from './component/subsidaries';

import CTASection from '@/components/CTASection';


export default function AboutUS() {
	return (
		<main className='w-full text-black'>
			<Hero />
            <Subsidaries />
            <Description/>
			<CTASection/>
	
            

		</main>
	);
}
