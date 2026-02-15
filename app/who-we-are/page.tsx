import Hero from './component/Hero';

import Value from './component/Value';

import Description from './component/Description';
import Expert from './component/Expert';
import CTASection from '@/components/CTASection';

export default function AboutUS() {
	return (
		<main className='w-full text-black'>
			<Hero />
			
		
            <Value />
			<Expert />
			
			<Description />
			<CTASection/>
			
		</main>
	);
}
