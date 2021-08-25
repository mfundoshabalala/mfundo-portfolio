import Head from 'next/head';
import Image from 'next/image';
import { NextPage } from 'next';
import _ from 'lodash';
// components
import BannerLayout from 'components/layout/BannerLayout';

const CV: NextPage = () => {
	const pageDetails = {
		title: 'Curriculum Vitae',
		bgColor: 'from-red-800 via-red-500 via-red-500 to-red-800',
		summary: 'For security reasons, you have request access to this file by filling the form below.',
	};

	const certifications = [
		{
			title: 'Certifications 1',
			url: '/pdf/Coursera 3NDHZJ96EDDN.pdf',
		},
		{
			title: 'Certifications 2',
			url: '/pdf/Coursera AQLUW5TMBVU7.pdf',
		},
		{
			title: 'Certifications 3',
			url: '/pdf/Coursera FKAX92999XNE.pdf',
		},
		{
			title: 'Certifications 4',
			url: '/pdf/Coursera N6BZPEHYWZNE.pdf',
		},
		{
			title: 'Certifications 5',
			url: '/pdf/Coursera PQ8N2QGF8XXC.pdf',
		},
		{
			title: 'Certifications 6',
			url: '/pdf/Coursera SCZZHUF23QDH.pdf',
		},
		{
			title: 'Certifications 7',
			url: '/pdf/Coursera Z7MHS723E35B.pdf',
		},
	];

	return (
		<>
			<Head>
				<title>Curriculum Vitae</title>
			</Head>
			<BannerLayout {...pageDetails}>
				<div className="flex flex-col items-center py-10 gap-y-10">
					<section className="container flex flex-wrap w-full gap-6 mx-auto">
						{_.map(certifications, ({ url, title }: { url: string; title: string }) => (
							<iframe
								title={title}
								src={url}
								width="auto"
								height={400}
								frameBorder="0"
								className="pointer-events-none"
							/>
						))}
					</section>
					<div className="grid place-items">
						<button type="button" className="btn btn-primary">
							Request Full CV
						</button>
					</div>
				</div>
			</BannerLayout>
		</>
	);
};

export default CV;
