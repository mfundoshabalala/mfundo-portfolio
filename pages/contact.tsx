import Head from "next/head";
import { NextPage } from "next";
// components
import BannerLayout from "components/layout/BannerLayout";

const Contact: NextPage = () => {
	console.log("contact");
	return (
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
				<section className="container mx-auto px-10 space-x-5 flex flex-row-reverse flex-wrap justify-center items-center text-gray-600">
					<div className="w-1/2 flex flex-col justify-center space-y-6">
						<h3 className="uppercase font-body tracking-tight text-shadow text-center text-gray-600 text-4xl font-black">
							Get in touch with me
						</h3>
						<form className="flex flex-col justify-around items-stretch space-y-4">
							<div className="flex flex-row flex-wrap space-x-5">
								<input
									className="flex-1 py-2 px-4 border border-solid border-gray-300 shadow rounded"
									type="text"
									name="name"
									id="name"
									placeholder="First Name"
								/>
								<input
									className="flex-1 py-2 px-4 border border-solid border-gray-300 shadow rounded"
									type="text"
									name="surname"
									id="surname"
									placeholder="Last Name"
								/>
							</div>
							<div className="flex flex-row flex-wrap space-x-5">
								<input
									className="flex-1 py-2 px-4 border border-solid border-gray-300 shadow rounded"
									type="text"
									name="organization"
									id="organization"
									placeholder="Organization"
								/>
								<input
									className="flex-1 py-2 px-4 border border-solid border-gray-300 shadow rounded"
									type="email"
									name="email"
									id="email"
									placeholder="Email Address"
								/>
							</div>
							<div className="">
								<textarea
									className="py-2 px-4 border border-solid border-gray-300 shadow rounded w-full"
									name="message"
									id="message"
									placeholder="Leave me a message"
								/>
							</div>
							<div className="flex flex-row flex-wrap space-x-5">
								<select
									className="flex-1 py-2 px-4 border border-solid border-gray-300 shadow rounded"
									name="reason"
									id="reason"
								>
									<option value="">Collaboration</option>
									<option value="">Job Opportunity</option>
									<option value="">Complements</option>
								</select>
								<div className="flex-1 px-4 flex flex-row justify-center items-center">
									<button className="w-full btn btn-primary" type="submit">
										Contact Me
									</button>
								</div>
							</div>
						</form>
					</div>
				</section>
			</BannerLayout>
		</>
	);
};

export default Contact;
