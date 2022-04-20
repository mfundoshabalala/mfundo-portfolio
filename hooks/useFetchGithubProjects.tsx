import useSWR from 'swr';

const useFetchGithubProjects = (): GithubRepository[] | undefined => {
	const { data: githubProjects } = useSWR<GithubRepository[] | undefined>(
		process.env.NEXT_PUBLIC_GITHUB_USERNAME
			? `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`
			: null
	);

	return githubProjects;
};

export default useFetchGithubProjects;
