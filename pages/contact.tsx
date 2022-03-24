import Head from 'next/head';
import { NextPage } from 'next';
// components
import BannerLayout from 'components/layout/BannerLayout';
import ContactFormSection from 'components/features/ContactFormSection';
import ContactInfoSection from 'components/features/ContactInfoSection';

const Contact: NextPage = () => {
	const pageDetails = {
		title: 'Contact Me',
		bgColor: 'from-yellow-800 via-yellow-500 via-yellow-500 to-yellow-800',
		summary: 'Get in touch with me to collaborate, hire me or just to say hello.',
	};

	return (
		<>
			<Head>
				<title>Contact Me</title>
			</Head>
			<BannerLayout {...pageDetails}>
				<section className="container p-10 mx-auto space-y-8 text-gray-700">
					<ContactFormSection />
					<ContactInfoSection />
				</section>
			</BannerLayout>
		</>
	);
};

export default Contact;
