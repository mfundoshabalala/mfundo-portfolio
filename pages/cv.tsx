import Head from 'next/head';
import Image from 'next/image';
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
			<div className="flex flex-col items-center space-y-10">
				<section className="flex justify-between md:flex-row md:space-x-4">
					<a href="" className="relative w-10 h-10 rounded">
						<Image
							src="/pdf/CERTIFICATE_LANDING_PAGE_3NDHZJ96EDDN.jpeg"
							layout="fill"
							alt="Convolutional Neural Networks Certification"
						/>
					</a>
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

export default CV;
