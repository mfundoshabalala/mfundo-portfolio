import { FunctionComponent } from 'react';
// components
// NOTE: Maybe move the social sites to the side of each page and fix
import Attributions from './components/Attributions';
import BackgroundWave from './components/BackgroundWave';
import Copyright from './components/Copyright';
import Newsletter from './components/Newsletter';
import SocialLinks from './components/SocialLinks';

// TODO: Rethink the design of the footer.
const Footer: FunctionComponent = () => (
	<footer className="relative px-2 pt-8 pb-2 border border-gray-200 border-solid shadow-2xl md:px-8">
		<div className="container relative z-10 flex flex-col flex-wrap items-center justify-between mx-auto space-y-3">
			<div className="flex flex-row flex-wrap w-full space-y-2 md:space-y-0 md:space-x-2">
				<Newsletter title="Subscribe to my Newsletter" />
				<SocialLinks title="Connect with me" />
			</div>
			<div className="flex flex-row flex-wrap w-full space-y-2 md:space-y-0 md:space-x-2">
				<Attributions />
				<Copyright author="Mfundo Shabalala" />
			</div>
		</div>
		<BackgroundWave />
	</footer>
);

export default Footer;
