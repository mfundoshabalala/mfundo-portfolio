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
			title="Curriculum Vitae"
			bgColor="from-red-800 via-red-500 via-red-500 to-red-800"
			summary="For security reasons, you have request access to this file by filling the form below."
		>
			<p>Request access</p>
		</BannerLayout>
	</>
);

export default CV;
