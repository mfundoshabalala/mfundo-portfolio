import AboutMeSummary from 'components/AboutMeSummary';
import SplitScreen from 'components/shared/SplitScreen';
import PageSection from 'components/shared/PageSection';
import ExperienceTimeline from 'components/ExperienceTimeline';
import BackgroundPattern from 'components/shared/BackgroundPattern';

const AboutSection: React.FunctionComponent = () => (
	<PageSection
		pageID="about"
		lightSection
		className={['py-10', 'text-justify']}
	>
		<SplitScreen>
			<ExperienceTimeline />
			<AboutMeSummary />
		</SplitScreen>
		<BackgroundPattern />
	</PageSection>
);

export default AboutSection;
