import CTASection from '@/components/CTASection';

import Hero from './component/Hero';
import RulesSection from './component/RulesSection';
import Description from '../who-we-are/component/Description';
export default function () {
	return (
		<main className='w-full text-black'>
			<Hero />
			<RulesSection />
			<Description />
			<CTASection />
		</main>
	);
}
