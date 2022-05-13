import SplitScreen from 'components/layout/SplitScreen';
import IntroductionImage from 'components/features/IntroductionImage';
import IntroductionDescription from 'components/features/IntroductionDescription';

const HomeSectionComponent: React.FunctionComponent = () => (
	// <section className="container h-full mx-auto">
	// 	<div className="flex flex-col h-full md:flex-row justify-evenly">
	// 		<IntroductionImage />
	// 		<IntroductionDescription />
	// 	</div>
	// </section>

	<SplitScreen>
		<IntroductionImage />
		<IntroductionDescription />
	</SplitScreen>
);

export default HomeSectionComponent;
