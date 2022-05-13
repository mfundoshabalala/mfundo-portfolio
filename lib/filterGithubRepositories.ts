import _ from 'lodash';

const filterGithubRepositories = (repositories: GithubRepo[] | undefined): GithubRepo[] | undefined => {
	const filteredRepositories = _.filter(repositories, (repository: GithubRepo) => !repository.fork)
		.filter((repository: GithubRepo) => !repository.name.includes('template'))
		.filter((repository: GithubRepo) => !repository.name.includes('portfolio'))
		.filter((repository: GithubRepo) => !repository.private);

	return filteredRepositories;
};

export default filterGithubRepositories;
