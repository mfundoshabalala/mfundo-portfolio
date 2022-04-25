/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import _ from 'lodash';
import { useEffect, useState } from 'react';
// helper function to filter the github projects
import filterGithubRepository from 'lib/filterGithubProjects';
// hook to fetch github projects
import useFetchGithubProjects from 'hooks/useFetchGithubProjects';
// component to display the github projects
import ProjectListItem from './ProjectListItem';

const GithubRepositoriesList: React.FunctionComponent = () => {
	const [projects, setProjects] = useState<GithubRepository[] | undefined>(
		undefined
	);
	const githubProjects = useFetchGithubProjects();
	const filteredGithubProjects = filterGithubRepository(githubProjects);

	useEffect(() => {
		setProjects(filteredGithubProjects);
	}, [filteredGithubProjects, projects]);

	if (!projects) {
		return (
			<div className="">
				<h3 className="">No Projects</h3>
				<p className="">Check if your are connected to the internet.</p>
			</div>
		);
	}

	return (
		<div className="flex flex-wrap justify-center gap-4 mx-auto mb-12">
			{_.map(projects, (project: GithubRepository) => (
				<ProjectListItem key={project.id} project={project} />
			))}
		</div>
	);
};

export default GithubRepositoriesList;
