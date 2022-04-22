import { useFetchLazy } from 'hooks/useFetch';

type ProjectCardFooterProps = React.FunctionComponent<{
	githubProject: string;
}>;

const ProjectCardFooter: ProjectCardFooterProps = ({ githubProject }) => {
	const response = useFetchLazy();

	function getRepositoryLanguages(repositoryName: string): Record<string, any> {
		return response.fetchData(
			process?.env?.NEXT_PUBLIC_GITHUB_USERNAME && repositoryName
				? `https://api.github.com/repos/${process?.env?.NEXT_PUBLIC_GITHUB_USERNAME}/${repositoryName}/languages`
				: ''
		);
	}

	const repository = getRepositoryLanguages(githubProject);

	return (
		<div>
			{Object.keys(repository.languages_url).map((language) => (
				<span
					key={language}
					className="inline-block bg-gray-800 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2"
				>
					{language}
				</span>
			))}
		</div>
	);
};

export default ProjectCardFooter;
