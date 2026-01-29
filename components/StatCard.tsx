import { motion } from 'framer-motion';

interface StatCardProps {
	value: string;
	label: string;
	delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay }}
			className='bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center'
		>
			<div className='text-4xl md:text-5xl font-semibold text-foreground mb-2'>{value}</div>
			<div className='text-sm text-muted-foreground'>{label}</div>
		</motion.div>
	);
};

export default StatCard;
