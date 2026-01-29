import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface FeatureCardProps {
	image: string;
	title: string;
	link: string;
	delay?: number;
}

const FeatureCard = ({ image, title, link, delay = 0 }: FeatureCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
		>
			<Link
				href={link}
				className='group block relative overflow-hidden rounded-2xl'
			>
				<div className='aspect-[4/3] overflow-hidden'>
					<Image
						src={image}
						alt={title}
						className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
					/>
				</div>
				<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
				<div className='absolute bottom-0 left-0 right-0 p-6'>
					<h3 className='text-lg font-semibold text-white mb-2'>{title}</h3>
					<span className='text-white/70 text-sm group-hover:text-white transition-colors'>Read More</span>
				</div>
			</Link>
		</motion.div>
	);
};

export default FeatureCard;
