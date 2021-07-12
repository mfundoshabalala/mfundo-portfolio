import Attributions from './components/Attributions';
import BackgroundWave from './components/BackgroundWave';
import Copyright from './components/Copyright';
import Newsletter from './components/Newsletter';
import SocialLinks from './components/SocialLinks';

const Footer: React.FC = () => (
	<footer className="relative pt-10 pb-2 font-thin text-gray-800 border border-solid shadow-2xl mad:pt-8 md:px-8">
		<div className="container relative z-10 flex flex-col flex-wrap items-center justify-between mx-auto space-y-3">
			<div className="flex flex-row flex-wrap w-full space-y-6 md:space-y-0 md:space-x-2">
				<Newsletter title="Subscribe to my Newsletter" />
				<SocialLinks title="Connect with me" />
			</div>
			<div className="flex flex-row flex-wrap justify-center w-full sm:space-y-0 md:space-x-2">
				<Attributions className="whitespace-pre hover:underline hover:text-purple-800" />
				<Copyright author="Mfundo Shabalala" className="whitespace-pre" />
			</div>
		</div>
		<BackgroundWave />
	</footer>
);

export default Footer;
