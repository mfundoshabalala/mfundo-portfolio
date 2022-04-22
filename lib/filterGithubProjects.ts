/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import _ from 'lodash';

const filterGithubRepository = (
	repositories: GithubRepository[] | undefined
): GithubRepository[] | undefined => {
	const filteredRepositories = _.filter(
		repositories,
		(repository: GithubRepository) => !repository.fork
	)
		.filter(
			(repository: GithubRepository) => !repository.name.includes('template')
		)
		.filter(
			(repository: GithubRepository) => !repository.name.includes('portfolio')
		)
		.filter(
			(repository: GithubRepository) => !repository.name.includes('components')
		)
		.filter((repository: GithubRepository) => !repository.private);

	return filteredRepositories as GithubRepository[];
};

export default filterGithubRepository;
