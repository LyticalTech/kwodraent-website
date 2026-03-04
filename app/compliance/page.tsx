import Hero from './component/Hero';
import RulesSection from './component/RulesSection';
import Roles from '../subsidiaries/component/Roles';

export default function Page() {
	return (
		<main className='w-full text-black'>
			<Hero />
			<RulesSection />
			<Roles />
		</main>
	);
}
