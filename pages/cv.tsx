import Head from "next/head";
// components
import BannerLayout from "components/layout/BannerLayout";

const CV: React.FunctionComponent = () => (
	<>
		<Head>
			<title>Curriculum Vitae</title>
		</Head>
		<BannerLayout
			summary="For security reasons, you have request access to this file by filling the form below."
			title="Curriculum Vitae"
			bgColor="bg-orange-600"
			color="text-gray-50"
		>
			<p>Request access</p>
		</BannerLayout>
	</>
);

export default CV;
