import useSWR from 'swr';

const useFetchGithubProjects = (): GithubRepositories[] | undefined => {
	const { data: githubProjects } = useSWR<GithubRepositories[] | undefined>(
		process.env.NEXT_PUBLIC_GITHUB_USERNAME
			? `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`
			: null
	);

	return githubProjects;
};

export default useFetchGithubProjects;
