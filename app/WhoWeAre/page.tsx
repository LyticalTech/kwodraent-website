import Hero from './component/Hero';
import Mission from './component/Mission';
import Vision from './component/Vision';
import Value from './component/Value';
export default function AboutUS() {
	return (
		<main className='w-full text-black'>
			<Hero />
			<Mission />
			<Vision />
            <Value />
		</main>
	);
}
