import Image from 'next/image';
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
		<section className='px-4 py-16 bg-black'>
			<div className='max-w-5xl mx-auto grid grid-auto-fit-md gap-25'>
				{cards.map((card) => (
					<a
						key={card.title}
						href={card.link}
						className='group block'
					>
						{/* Image */}
						<div className='relative w-full h-60 rounded-3xl overflow-hidden'>
							<Image
								src={card.image}
								alt={card.title}
								fill
								className='object-cover rounded-3xl'
								priority
							/>
						</div>

						{/* Decorative horizontal bar */}
						<div className='px-2'>
							<div className='mt-4 h-0.5 w-full bg-gray-300 transition-colors duration-300 group-hover:bg-blue-600' />
						</div>

						{/* Title + Button */}
						<div className='mt-4'>
							<h3 className='text-2xl font-light text-white'>{card.title}</h3>
							<div className='mt-8 w-fit bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2.5 rounded-lg transition-colors duration-300'>
								Read More
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default ImageSection;
