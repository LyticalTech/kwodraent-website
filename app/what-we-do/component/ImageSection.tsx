
import Image from 'next/image';
<<<<<<< HEAD
import SubsidiariesImage from '@/public/assets/KD group 1.png';
import PartinersImage from '@/public/assets/Bottom our partners.png';
import WhoWeAreImage from '@/public/assets/Hero image.png';

const cards = [
	{
		title: 'Who We Are',
		image: WhoWeAreImage,
		link: '/who-we-are',
	},
	{
		Id: 2,
		title: 'Subsidiaries',
		image: SubsidiariesImage,
		link: '/subsidiaries',
	},
	{
		Id: 3,
		title: 'Our Partners',
		image: PartinersImage,
		link: '/partnerships',
	},
];

const ImageSection = () => {
	return (
		<section className='p-16  bg-black'>
			<div className='grid grid-auto-fit-md gap-8'>
				{cards.map((card) => (
					<a
						key={card.title}
						href={card.link}
						className='group block'
					>
						{/* Image */}
						<div className='relative w-full h-60 rounded-3xl overflow-hidden'>
=======
import Link from 'next/link';

const Description = () => {
	const cards = [
		{
			title: 'Who We Are',
			image: '/assets/Hero image.png',
			link: '/Who-We-Are', // page 1
		},
		{
			title: 'Subsidiaries',
			image: '/assets/Bottom What We Do.png',
      link: '/subsidiaries', // page 2
		},
		{
			title: 'Partnerships',
			image: '/Bottom our partners.webp',
			link: '/partnerships', // page 3
		},
	];

	return (
		<section className='p-16 bg-black'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
				{cards.map((card) => (
					<div
						key={card.title}
						className='group block'
					>
						{/* Image */}
						<div className='relative w-full h-64'>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
							<Image
								src={card.image}
								alt={card.title}
								fill
								className='object-cover rounded-3xl'
								priority
							/>
						</div>

						{/* Decorative horizontal bar */}
<<<<<<< HEAD
						<div className='px-2'>
							<div className='mt-4 h-0.5 w-full bg-gray-300 transition-colors duration-300 group-hover:bg-blue-600' />
						</div>

						{/* Title + Button */}
						<div className='mt-4'>
							<h3 className='text-2xl font-semibold text-white'>{card.title}</h3>
							<div className='mt-8 w-fit bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-lg transition-colors duration-300'>
								Read More
							</div>
						</div>
					</a>
=======
						<div className='mt-4 h-0.5 w-full bg-gray-300 transition-colors duration-300 group-hover:bg-blue-600' />

						{/* Title + Button */}
						<div className='mt-6'>
							<h3 className='text-xl text-white'>{card.title}</h3>

							{/* BUTTON LINK */}
							<Link href={card.link}>
								<span className='inline-block mt-4 px-5 py-2 text-sm bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700'>
									Explore
								</span>
							</Link>
						</div>
					</div>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
				))}
			</div>
		</section>
	);
};

export default Description;
