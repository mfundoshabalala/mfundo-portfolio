import Head from 'next/head';
import { NextPage } from 'next';
// Pages Section Components
import HomeSection from 'components/pages/HomeSection';
import AboutSection from 'components/pages/AboutSection';
import ProjectsSection from 'components/pages/ProjectsSection';

const Home: NextPage = () => (
	<>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<title>Mfundo Shabalala Portfolio</title>
		</Head>
		<HomeSection />
		<AboutSection />
		<ProjectsSection />
	</>
);

export default Home;
