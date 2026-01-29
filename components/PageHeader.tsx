import { motion } from 'framer-motion';

interface PageHeaderProps {
	title: string;
	subtitle?: string;
	label?: string;
}

const PageHeader = ({ title, subtitle, label }: PageHeaderProps) => {
	return (
		<section className='bg-black pt-32 pb-16 md:pt-40 md:pb-20'>
			<div className='container-custom text-center'>
				{label && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className='flex items-center justify-center gap-2 mb-6'
					>
						<span className='w-3 h-0.5 bg-brand-blue'></span>
						<span className='text-brand-blue text-sm font-medium'>{label}</span>
					</motion.div>
				)}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className='page-header-title mb-6'
				>
					{title}
				</motion.h1>
				{subtitle && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto'
					>
						{subtitle}
					</motion.p>
				)}
			</div>
		</section>
	);
};

export default PageHeader;
