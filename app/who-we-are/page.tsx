import Hero from './component/Hero';
import Mission from './component/Mission';
import Vision from './component/Vision';
import Value from './component/Value';
import History from './component/History';
import Description from './component/Description';

export default function AboutUS() {
	return (
		<main className='w-full text-black'>
			<Hero />
			<Mission />
			<Vision />
            <Value />
			<History />
			<Description />
			
		</main>
	);
}
