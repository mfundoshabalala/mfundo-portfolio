import Head from 'next/head';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/solid';
// components
import BannerLayout from 'components/layout/BannerLayout';

const containerVariant = {
	hidden: { opacity: 0, scale: 1.5 },
	show: { opacity: 1, scale: 1, transition: { delay: 1 } },
	exit: { x: '-100vw', opacity: 0 },
};

const Contact: NextPage = () => (
	<>
		<Head>
			<title>Contact Me</title>
		</Head>
		<BannerLayout
			summary="Get in touch with me to collaborate, hire me or just to say hello."
			title="Contact Me"
			bgColor="bg-gray-500"
			color="text-gray-50"
		>
			<motion.section variants={containerVariant} className="container p-10 mx-auto space-y-8 text-gray-600">
				<div className="flex flex-col justify-center w-1/2 mx-auto space-y-6">
					<h3 className="text-4xl font-black tracking-tight text-center text-gray-600 uppercase font-body text-shadow">
						Get in touch with me
					</h3>
					<form className="flex flex-col items-stretch justify-around space-y-4">
						<div className="flex flex-row flex-wrap space-x-5">
							<input
								className="flex-1 px-4 py-2 border border-gray-300 border-solid rounded shadow"
								type="text"
								name="name"
								id="name"
								placeholder="First Name"
							/>
							<input
								className="flex-1 px-4 py-2 border border-gray-300 border-solid rounded shadow"
								type="text"
								name="surname"
								id="surname"
								placeholder="Last Name"
							/>
						</div>
						<div className="flex flex-row flex-wrap space-x-5">
							<input
								className="flex-1 px-4 py-2 border border-gray-300 border-solid rounded shadow"
								type="text"
								name="organization"
								id="organization"
								placeholder="Organization"
							/>
							<input
								className="flex-1 px-4 py-2 border border-gray-300 border-solid rounded shadow"
								type="email"
								name="email"
								id="email"
								placeholder="Email Address"
							/>
						</div>
						<div className="">
							<textarea
								className="w-full px-4 py-2 border border-gray-300 border-solid rounded shadow"
								name="message"
								id="message"
								placeholder="Leave me a message"
							/>
						</div>
						<div className="flex flex-row flex-wrap space-x-5">
							<select
								className="flex-1 px-4 py-2 border border-gray-300 border-solid rounded shadow"
								name="reason"
								id="reason"
							>
								<option value="">Collaboration</option>
								<option value="">Job Opportunity</option>
								<option value="">Complements</option>
							</select>
							<div className="flex flex-row items-center justify-center flex-1 px-4">
								<button className="w-full btn btn-primary" type="submit">
									Contact Me
								</button>
							</div>
						</div>
					</form>
				</div>
				<hr />
				<div className="flex justify-center">
					<div className="flex flex-col">
						<span className="">
							<AtSymbolIcon className="inline-block w-6 h-6 mr-4" />
							<a href="" className="hover:underline">
								mfundoshabalala@gmail.com
							</a>
						</span>
						<span className="">
							<PhoneIcon className="inline-block w-6 h-6 mr-4" />
							<a href="" className="hover:underline">
								+27 604 843 666
							</a>
						</span>
					</div>
				</div>
			</motion.section>
		</BannerLayout>
	</>
);

export default Contact;
