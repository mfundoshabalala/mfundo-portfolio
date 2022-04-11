/* eslint-disable react/no-array-index-key */
import PageSection from 'components/PageSection';
import ProjectListItem from 'components/ProjectListItem';

const ProjectsSection: React.FunctionComponent = () => (
	<PageSection pageID="projects" className={['', 'flex-wrap gap-5 py-16']}>
		<h1 className="w-full text-center text-5xl font-black uppercase tracking-wide my-16">My Work</h1>
		{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
			<ProjectListItem key={i} />
		))}
	</PageSection>
);

export default ProjectsSection;
