import React from 'react';
import Image from 'next/image';
import Container from '../../../components/Container';

const Contact = () => {
	return (
		<section className='w-full py-24 bg-white'>
			<Container>
				<div className='max-w-7xl mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-36 items-stretch'>
						{/* LEFT — Image with broken border */}
						<div className='relative w-120 h-150 rounded-2xl overflow-hidden'>
							{/* Main Image */}
							<Image
								src='/contactimage.webp'
								alt='Solar energy'
								fill
								className='object-cover'
							/>

							{/* Optional smaller image centered (only if you want overlay) */}
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='w-60 h-60'>
									<Image
										src='/contactimage.webp'
										alt='Overlay image'
										width={240} // 60* 4 = 192px
										height={240}
										className='object-cover rounded-xl'
									/>
								</div>
							</div>

							{/* Broken dashed border overlay */}
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='w-80 h-80 border-2 border-dashed border-white rounded-xl' />
							</div>
						</div>

						{/* RIGHT — Contact content */}
						<div className='bg-white rounded-2xl '>
							<h1 className='flex items-center gap-3 text-base font-semibold text-black mb-6'>
								<span className='inline-block w-4 h-0.5 bg-blue-500'></span>{" "}
								Contact Us
							</h1>

							<h2 className='text-3xl md:text-6xl  mb-6'>Let’s Talk About Your Solar Future</h2>

							<p className='text-black mb-8'>
								Join over 100 companies using clean, affordable energy from Energy Max. Contact our team for a free assessment.
							</p>

							{/* Form */}
							<form className='space-y-5'>
								{/* Name + Email */}
								<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium mb-3'
										>
											Name
										</label>
										<input
											id='name'
											type='text'
											placeholder='James Kers'
											className='w-full border border-gray-300 px-4 py-3'
										/>
									</div>

									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium mb-3'
										>
											Email
										</label>
										<input
											id='email'
											type='email'
											placeholder='name@company.com'
											className='w-full border border-gray-300 px-4 py-3'
										/>
									</div>
								</div>

								{/* Company */}
								<div>
									<label
										htmlFor='company'
										className='block text-sm font-medium mb-3'
									>
										Company name
									</label>
									<input
										id='company'
										type='text'
										placeholder='Green Tech Company'
										className='w-full border border-gray-300 px-4 py-3'
									/>
								</div>

								{/* Message */}
								<div>
									<label
										htmlFor='message'
										className='block text-sm font-medium mb-3'
									>
										Message
									</label>
									<textarea
										id='message'
										rows={4}
										placeholder='Type a message...'
										className='w-full border border-gray-300  px-4 py-3'
									/>
								</div>

								<button
									type='submit'
									className='w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition'
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Contact;
