import { motion } from "framer-motion";
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  illustration?: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, illustration, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="service-card flex flex-col h-full"
    >
      <div className="text-brand-blue mb-6">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">{description}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-white text-sm hover:bg-white/5 transition-colors w-fit"
      >
        View detail
      </Link>
      {illustration && (
        <div className="mt-8 opacity-50">{illustration}</div>
      )}
    </motion.div>
  );
};

export default ServiceCard;
