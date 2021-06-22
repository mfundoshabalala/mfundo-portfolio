import Head from 'next/head';
import { NextPage } from 'next';
// components
import BannerLayout from 'components/layout/BannerLayout';

const CV: NextPage = () => (
	<>
		<Head>
			<title>Curriculum Vitae</title>
		</Head>
		<BannerLayout
			summary="For security reasons, you have request access to this file by filling the form below."
			title="Curriculum Vitae"
			bgColor="bg-red-600/90"
			color="text-gray-50"
		>
			<p>Request access</p>
		</BannerLayout>
	</>
);

export default CV;
