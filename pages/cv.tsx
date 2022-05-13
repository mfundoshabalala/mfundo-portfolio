import Head from 'next/head';
import { NextPage } from 'next';
// components
import BannerLayout from 'components/layout/BannerLayout';
import CertificatesList from 'components/features/CertificatesList';

const CV: NextPage = () => {
	const pageDetails = {
		title: 'Curriculum Vitae',
		bgColor: 'from-red-800 via-red-500 via-red-500 to-red-800',
		summary: 'For security reasons, you have request access to this file by filling the form below.',
	};

	return (
		<>
			<Head>
				<title>Curriculum Vitae</title>
			</Head>
			<BannerLayout {...pageDetails}>
				<div className="flex flex-col items-center py-10 gap-y-10">
					<CertificatesList />
					<button type="button" className="btn btn-primary">
						Request Full CV
					</button>
				</div>
			</BannerLayout>
		</>
	);
};

export default CV;
