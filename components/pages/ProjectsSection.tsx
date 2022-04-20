/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import _ from 'lodash';
import { useEffect, useState } from 'react';
//
import PageSection from 'components/shared/PageSection';
import ProjectListItem from 'components/ProjectListItem';
import filterGithubRepository from 'lib/filterGithubProjects';
import useFetchGithubProjects from 'hooks/useFetchGithubProjects';
import BackgroundPattern from 'components/shared/BackgroundPattern';

const ProjectsSection: React.FunctionComponent = () => {
	const [projects, setProjects] = useState<GithubRepository[] | undefined>(
		undefined
	);
	const githubProjects = useFetchGithubProjects();
	const filteredGithubProjects = filterGithubRepository(githubProjects);

	useEffect(() => {
		if (!_.isEqual(projects, [])) return;
		setProjects(filteredGithubProjects);
	}, [filteredGithubProjects, projects]);

	return (
		<PageSection pageID="projects" className={['', 'flex-wrap gap-4']}>
			<h1 className="w-full text-center text-5xl font-black uppercase tracking-wide py-4">
				<div className="bg-clip-text bg-gradient-to-r from-orange-800 via-orange-500  to-orange-800">
					<span className="text-transparent">My Work</span>
				</div>
			</h1>
			{_.map(projects ?? githubProjects, (project: GithubRepository) => (
				<ProjectListItem key={project.id} project={project} />
			))}
			<BackgroundPattern className="bg-cogs-pattern" />
		</PageSection>
	);
};

export default ProjectsSection;
