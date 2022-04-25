// page section components
import PageHeader from 'components/PageHeader';
import PageSection from 'components/shared/PageSection';
// page background pattern component
import BackgroundPattern from 'components/shared/BackgroundPattern';
import GithubRepositoriesList from 'components/GithubRepositoriesList';

const ProjectsSection: React.FunctionComponent = () => (
	<PageSection pageID="projects">
		<PageHeader pageTitle="My Work" />
		<GithubRepositoriesList />
		<BackgroundPattern className="bg-cogs-pattern" />
	</PageSection>
);

export default ProjectsSection;
