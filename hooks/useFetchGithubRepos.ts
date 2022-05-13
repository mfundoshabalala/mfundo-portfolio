import useSWR from 'swr';

const useFetchGithubRepos = (): GithubRepo[] | undefined => {
	const { data: githubRepos } = useSWR<GithubRepo[] | undefined>(
		process.env.NEXT_PUBLIC_GITHUB_USERNAME
			? `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || ''}/repos`
			: null
	);

	return githubRepos;
};

export default useFetchGithubRepos;
