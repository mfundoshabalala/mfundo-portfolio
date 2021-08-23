import _ from 'lodash';
import Head from 'next/head';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
// components
import BannerLayout from 'components/layout/BannerLayout';
import useFetchGithubRepos from 'hooks/useFetchGithubRepos';
import filterGithubRepositories from 'lib/filterGithubRepositories';
import FeaturedRepositories from 'components/features/FeaturedRepositories';

const Portfolio: NextPage = () => {
	const [repositories, setRepositories] = useState<GithubRepo[] | undefined>([]);
	const githubRepos = useFetchGithubRepos();
	const filteredGithubRepositories = filterGithubRepositories(githubRepos);

	useEffect(() => {
		if (_.isEqual(repositories, [])) setRepositories(filteredGithubRepositories);
	}, [filteredGithubRepositories, githubRepos, repositories]);

	const pageDetails = {
		summary: 'Showcasing my careful curated projects that I hope you will enjoy.',
		quote: 'Find out what you like doing best and get someone to pay you for doing it. —Katherine Whitehorn',
		title: 'Portfolio Page',
		bgColor: 'from-blue-800 via-blue-500 via-blue-500 to-blue-800',
		color: 'text-gray-50',
	};

	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>
			<BannerLayout {...pageDetails}>
				{repositories && <FeaturedRepositories repositories={repositories} />}
			</BannerLayout>
		</>
	);
};

export default Portfolio;
