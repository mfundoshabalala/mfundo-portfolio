import HeroSection from 'components/HeroSection';
import PageSection from 'components/shared/PageSection';
import BackgroundPattern from 'components/shared/BackgroundPattern';

const HomeSection: React.FunctionComponent = () => (
	<PageSection pageID="home" className={['h-screen']}>
		<HeroSection />
		<BackgroundPattern className="bg-food-pattern" />
	</PageSection>
);

export default HomeSection;
