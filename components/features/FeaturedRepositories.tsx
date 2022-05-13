import _ from 'lodash';

type RepositoriesProps = {
	repositories: Array<GithubRepo>;
};

const FeaturedRepositories: React.FC<RepositoriesProps> = ({ repositories }) => (
	<ul className="flex flex-row flex-wrap items-stretch justify-center gap-8 py-12">
		{_.map(repositories, (repository: GithubRepo) => (
			<li
				key={repository.id}
				className="border border-gray-300 rounded shadow-sm drop-shadow text-gray-50 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:shadow-none w-96"
			>
				<section className="flex flex-col justify-between h-full px-8 py-4 gap-y-4 flex-nowrap">
					<header className="">
						<div className="text-xl font-bold capitalize">{repository.name.replaceAll('-', ' ')}</div>
						<div className="flex flex-row text-sm gap-x-2">
							{repository?.homepage && (
								<a
									href={`https://${repository?.homepage}`}
									target="_blank"
									rel="noreferrer"
									className="hover:underline"
								>
									Homepage
								</a>
							)}
							{repository?.html_url && (
								<a href={repository?.html_url} target="_blank" rel="noreferrer" className="hover:underline">
									Source code
								</a>
							)}
						</div>
					</header>
					<main className="flex-1">{repository.description}</main>
					<footer className="flex items-center justify-between flex-nowrap">
						{repository.language && (
							<span className="px-4 py-1 text-xs font-medium text-gray-800 border border-gray-300 rounded bg-gray-50">
								{repository.language}
							</span>
						)}
					</footer>
				</section>
			</li>
		))}
	</ul>
);

export default FeaturedRepositories;
