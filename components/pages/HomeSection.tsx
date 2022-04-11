import HeroSection from 'components/HeroSection';
import PageSection from 'components/PageSection';

const HomeSection: React.FunctionComponent = () => (
	<PageSection pageID="home" className={['h-screen']}>
		<HeroSection />
	</PageSection>
);

export default HomeSection;
