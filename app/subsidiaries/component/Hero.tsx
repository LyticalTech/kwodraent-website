'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import BannerOne from '@/public/banner1.png';
import BannerTwo from '@/public/banner2.png';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: 'easeOut', // ✅ now properly typed
		},
	},
};

const imageReveal: Variants = {
	hidden: { opacity: 0, scale: 1.05 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: 'easeOut',
		},
	},
};

const Hero = () => {
	return (
		<section className='w-full bg-white py-14 md:py-20 overflow-hidden'>
			<Container>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate='show'
					className='flex flex-col items-start w-full gap-6'
				>
					{/* TOP LABEL */}
					<motion.h1
						variants={fadeUp}
						className='mt-10 md:text-base text-sm text-gray-800 flex font-medium items-center gap-2 tracking-wide'
					>
						<div className='w-4 h-1 bg-blue-600' />
						Subsidiaries
					</motion.h1>

					{/* HEADING */}
					<motion.div
						variants={fadeUp}
						className='flex flex-col'
					>
						<h2 className='max-w-xl text-[clamp(2.6rem,3.8vw,6rem)] text-gray-800 leading-[1.05] tracking-tight'>
							Specialized Capabilities. <span className='text-neutral-500'>Integrated Delivery.</span>
						</h2>

<<<<<<< HEAD
						<p className='mt-6 max-w-5xl text-[clamp(1.05rem,1.5vw,1.3rem)] text-gray-700 leading-[1.5]'>
							Through our subsidiaries and strategic partnerships, we bring together specialized expertise, regional insight, and
							delivery strength to support energy developments worldwide.
						</p>
					</motion.div>
=======
          {/* HEADING */}
          <div className="flex flex-col gap-3 max-w-3xl">
            <h2 className="text-black text-2xl sm:text-3xl md:text-4xl">
              Effortlessly manage your accounting
            </h2>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140

					{/* IMAGES */}
					<motion.div
						variants={fadeUp}
						className='flex flex-col lg:flex-row mt-2 w-full max-w-5xl mx-auto rounded-2xl overflow-hidden'
					>
						<motion.div
							variants={imageReveal}
							className='bg-gray-100 rounded-l-lg overflow-hidden w-full lg:w-1/2'
						>
							<Image
								src={BannerOne}
								alt='Background'
								className='w-full object-cover hover:scale-105 transition-transform duration-700'
							/>
						</motion.div>

<<<<<<< HEAD
						<motion.div
							variants={imageReveal}
							className='-ml-1 w-full lg:w-1/2 bg-gray-100 rounded-r-lg overflow-hidden'
						>
							<Image
								src={BannerTwo}
								alt='Background'
								className='w-full object-cover hover:scale-105 transition-transform duration-700'
							/>
						</motion.div>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	);
=======
          {/* IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] mt-10 overflow-hidden rounded-2xl">
            <Image
              src="/assets/Placeholder for subsidiaries.png"
              alt="Background"
              fill
              className="object-cover"
            />

            {/* DARK OVERLAY FOR READABILITY */}
            <div className="absolute inset-0 " />

            {/* CONTENT WRAPPER — positioned at bottom */}
            <div className="absolute inset-0 flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end p-6 md:p-10 gap-6">
              
              {/* LEFT */}
              <div className="w-full md:max-w-md text-white md:text-left mt-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl  mb-3">
                  Stronger Together Offices
                </h2>
                <p className="text-xs md:text-sm opacity-90 ">
                  As part of industry alliances, we can offer expanded capabilities and expertise to customers, and take advantage of a deep pool of subsea knowledge.
                </p>
              </div>

              {/* RIGHT */}
              <div className="w-full mr-20 md:max-w-md text-white md:text-black md:text-left mt-4 md:mt-0">
                <h2 className="text-xl md:text-2xl lg:text-3xl  mb-3">
                  Global Reach
                </h2>
                <p className="text-xs  md:text-sm opacity-90 ">
                  These partnerships allow us to deliver subsea projects of any scale anywhere in the world, with operational facilities in various geographies tailored to the asset management requirements of the regions they serve.
                </p>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
};

export default Hero;
