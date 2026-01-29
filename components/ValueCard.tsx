import { motion } from 'framer-motion';

interface ValueCardProps {
	number: string;
	title: string;
	description: string;
	delay?: number;
}

const ValueCard = ({ number, title, description, delay = 0 }: ValueCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			className='group'
		>
			<div className='text-brand-blue text-sm font-medium mb-3'>{number}</div>
			<h4 className='text-lg font-semibold text-white mb-3'>{title}</h4>
			<p className='text-white/60 text-sm leading-relaxed'>{description}</p>
		</motion.div>
	);
};

export default ValueCard;
