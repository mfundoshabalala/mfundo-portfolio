import Head from 'next/head';
import { NextPage } from 'next';
import IntroductionImage from 'components/features/IntroductionImage';
import IntroductionDescription from 'components/features/IntroductionDescription';

const Home: NextPage = () => (
	<>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<title>Home</title>
		</Head>
		<section className="container h-full mx-auto">
			<div className="flex flex-col h-full md:flex-row justify-evenly">
				<IntroductionImage />
				<IntroductionDescription />
			</div>
		</section>
	</>
);

export default Home;
