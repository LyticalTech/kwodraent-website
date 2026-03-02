'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

const Value = () => {
	return (
		<div className='w-full py-24 bg-black'>
			{/* ================= BLACK SECTION ================= */}
			<div className='w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4'>
				{/* MISSION */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className='flex flex-col'
				>
					<h2 className='text-sm text-white flex font-medium items-center gap-2 tracking-wide '>
						<div className='w-4 h-1 bg-blue-600 ' />
						Mission
					</h2>

					<h3 className='mt-8 mb-4 text-white text-[clamp(2.6rem,4vw,6rem)] font-semibold'>Our Mission</h3>

<<<<<<< HEAD
					<div className='w-full h-[2px] bg-white/40' />
=======
              <h3 className="text-white font-thin text-4xl ">
                Our Mission
              </h3>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140

					<p className='mt-4 text-white text-lg leading-relaxed max-w-xl'>
						We leverage our expertise, integrated capabilities, and disciplined execution to reduce complexity, unlock
						opportunities, and deliver value to our clients and stakeholders.
					</p>
				</motion.div>

<<<<<<< HEAD
				{/* VISION */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.9 }}
					viewport={{ once: true }}
					className='flex flex-col'
				>
					<h2 className='text-sm text-white flex font-medium items-center gap-2 tracking-wide '>
						<div className='w-4 h-1 bg-blue-600 ' />
						Vision
					</h2>
=======
              <p className="text-white text-base leading-relaxed font-thin max-w-xl">
                Create sustainable solutions that improve quality of life
                and meet society's evolving needs.
              </p>
            </motion.div>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140

					<h3 className='mt-8 mb-4 text-white text-[clamp(2.6rem,4vw,6rem)] font-semibold'>Our Vision</h3>

<<<<<<< HEAD
					<div className='w-full h-[2px] bg-white/50' />
=======
              <h3 className="text-white font-thin text-4xl ">
                Our Vision
              </h3>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140

					<p className='mt-4 text-white text-lg leading-relaxed max-w-xl'>
						To be the definitive integrated technology and energy ecosystem, where strategic intelligence, bold execution, and
						uncompromising integrity converge to deliver extraordinary client outcomes.
					</p>
				</motion.div>
			</div>

<<<<<<< HEAD
			<div className='px-4 mt-28 max-w-6xl mx-auto w-full h-[2px] bg-white/40' />
=======
              <p className="text-white text-base leading-relaxed font-thin max-w-xl">
                To become a global leader in innovative and sustainable
                solutions that shape the future of industries and communities.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140

			{/* ================= CORE VALUES SECTION ================= */}

			{/* 3 column grid */}
			<div className=' w-full py-16 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10 items-start px-4'>
				{/* LEFT BIG (2/3 width) */}
				<div className='flex flex-col lg:col-span-2'>
					<h1 className='text-white text-[clamp(2.6rem,4vw,6rem)] font-semibold'>Our Core Values</h1>
					<div className='mt-20 relative w-full h-[520px] overflow-hidden rounded-2xl'>
						{/* IMAGE FULL COVER */}
						<Image
							src='/assets/KD group 5.png'
							alt='core values'
							fill
							className='object-cover'
							priority
						/>

<<<<<<< HEAD
						{/* SWEEP */}
						<motion.div className='absolute inset-0 pointer-events-none overflow-hidden'>
							<motion.div
								className='absolute top-0 h-full w-[50%] bg-gradient-to-r from-transparent via-black/70 to-transparent'
								initial={{ x: '-100%' }}
								animate={{ x: '200%' }}
								transition={{
									duration: 3,
									repeat: Infinity,
									ease: 'linear',
								}}
							/>
						</motion.div>
					</div>
				</div>
=======
      {/* LEFT BIG (2/3 width) */}
      <div className="flex flex-col gap-8 lg:col-span-2">
        <h1 className="text-5xl  text-white font-normal max-w-xl">
          Our Core Values
        </h1>
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140

				{/* RIGHT CARDS (1/3 width) */}
				<div className='flex flex-col gap-6'>
					{/* CARD 1 */}
					<div className='p-2'>
						<span className='text-blue-500 text-3xl font-semibold'>.01</span>
						<h3 className='text-2xl font-semibold text-white mt-2 mb-2'>Execution Excellence</h3>
						<p className='text-gray-300 leading-relaxed'>
							Each venture is structured with technical rigor, commercial discipline, and deliberate oversight from concept
							through delivery. We approach complexity methodically, ensuring that performance is measured by durable outcomes.
						</p>
					</div>

					{/* CARD 2 */}
					<div className='p-2'>
						<span className='text-blue-500 text-3xl font-semibold'>.02</span>
						<h3 className='text-2xl font-semibold text-white mt-2 mb-2'>Reliability</h3>
						<p className='text-gray-300 leading-relaxed'>
							Enduring partnerships depend on consistency. We uphold commitments with transparency and accountability, managing
							risk with clarity and composure.
						</p>
					</div>

<<<<<<< HEAD
					{/* CARD 3 */}
					<div className='p-2'>
						<span className='text-blue-500 text-3xl font-semibold'>.03</span>
						<h3 className='text-2xl font-semibold text-white mt-2 mb-2'>Collaboration</h3>
						<p className='text-gray-300 leading-relaxed'>
							We work closely with you, our partners, and stakeholders to bring clarity and coordination as we focus on delivery.
						</p>
						<p className='mt-1 text-gray-300 leading-relaxed'>
							Together, we move complex energy ventures forward with confidence and purpose.
						</p>
					</div>

					{/* BUTTON */}
					<button className='mt-6 w-fit bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2'>
						Explore More <GoArrowUpRight />
					</button>
				</div>
			</div>
		</div>
	);
=======
        {/* CARD 1 */}
        <div className="p-2">
          <span className="text-[#143CFF] font-medium text-3xl ">.01</span>
          <h3 className="text-xl  text-white mt-2 font-medium mb-2">
            Smart Automation
          </h3>
          <p className="text-gray-300 font-light leading-relaxed">
            Set things in motion with just a few steps. No endless forms,
            no clutter, just a clean start that gets you moving fast.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-2">
          <span className="text-[#143CFF] text-3xl font-medium ">.02</span>
          <h3 className="text-xl  text-white font-medium mt-2 mb-2">
            Seamless Collaboration
          </h3>
          <p className="text-gray-300 font-light leading-relaxed">
            Bring everyone on the same page instantly. Our system adapts
            to your workflow, not the other way around.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-2">
          <span className="text-[#143CFF] font-medium text-3xl ">.03</span>
          <h3 className="text-xl  text-white font-medium mt-2 mb-2">
            Scalable Growth
          </h3>
          <p className="text-gray-300 font-light leading-relaxed">
            Once you're in, everything expands seamlessly. One place,
            one system, zero resistance.
          </p>
        </div>

        {/* BUTTON */}
        <button className="mt-6 w-fit bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition flex items-center gap-2">
          Explore More <GoArrowUpRight />
        </button>

      </div>
    </div>
  </Container>
</section>

    </>
  );
>>>>>>> 7f9dc62351e49f36793bc755d903bcbaa2b58140
};

export default Value;
