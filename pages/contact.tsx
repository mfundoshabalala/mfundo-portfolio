import Head from 'next/head';
import { NextPage } from 'next';
import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/solid';
// components
import BannerLayout from 'components/layout/BannerLayout';

const Contact: NextPage = () => (
	<>
		<Head>
			<title>Contact Me</title>
		</Head>
		<BannerLayout
			title="Contact Me"
			bgColor="from-yellow-800 via-yellow-500 via-yellow-500 to-yellow-800"
			summary="Get in touch with me to collaborate, hire me or just to say hello."
		>
			<section className="container p-10 mx-auto space-y-8 text-gray-600">
				<div className="flex flex-col justify-center max-w-xl mx-auto space-y-6">
					<h3 className="text-4xl font-black tracking-tight text-center text-gray-600 uppercase font-body text-shadow">
						Get in touch with me
					</h3>
					<form className="flex flex-col items-stretch justify-around space-y-4">
						<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
							<input
								className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
								type="text"
								name="name"
								id="name"
								placeholder="First Name"
							/>
							<input
								className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
								type="text"
								name="surname"
								id="surname"
								placeholder="Last Name"
							/>
						</div>
						<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
							<input
								className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
								type="text"
								name="organization"
								id="organization"
								placeholder="Organization"
							/>
							<input
								className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
								type="email"
								name="email"
								id="email"
								placeholder="Email Address"
							/>
						</div>
						<div className="">
							<textarea
								className="w-full px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
								name="message"
								id="message"
								placeholder="Leave me a message"
							/>
						</div>
						<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
							<select
								className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
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
				<div className="flex flex-col justify-center mx-auto space-y-2 sm:space-x-6 sm:flex-row sm:space-y-0 min-w-max">
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
			</section>
		</BannerLayout>
	</>
);

export default Contact;
