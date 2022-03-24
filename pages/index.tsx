import Head from 'next/head';
import { NextPage } from 'next';
// Layout Component
import SplitScreen from 'components/layout/SplitScreen';
// Higher Order Component
// import Portal from 'HOC/Portal';
// Shared Components
// import Modal from 'components/Modal';
//
import IntroductionImage from 'components/features/IntroductionImage';
import IntroductionDescription from 'components/features/IntroductionDescription';
import HomeSectionComponent from 'components/pages/HomeSectionComponent';

const Home: NextPage = () => (
	<>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<title>Home</title>
		</Head>
		<HomeSectionComponent />
		{/* <Portal>
			<Modal />
		</Portal> */}
	</>
);

export default Home;
