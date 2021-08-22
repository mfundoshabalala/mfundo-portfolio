// import Attributions from './components/Attributions';
import BackgroundWave from './components/BackgroundWave';
// import Copyright from './components/Copyright';
import Newsletter from './components/Newsletter';
import SocialLinks from './components/SocialLinks';

const Footer: React.FC = () => (
	<footer className="relative pt-10 pb-2 font-thin text-gray-800 border border-solid shadow-2xl mad:pt-8 md:px-8">
		<section className="container relative z-10 flex flex-col flex-wrap items-center justify-between mx-auto space-y-8">
			<div className="flex flex-row flex-wrap w-full space-y-8 md:space-y-0 md:space-x-2">
				<Newsletter title="Subscribe to my Newsletter" />
				<SocialLinks title="Connect with me" />
			</div>
			<div className="whitespace-pre-wrap">
				Made from scratch using <a href="https://nextjs.org" target="_blank" className="pl-1 link" rel="noreferrer">Next.js</a>,
				<a href="https://vercel.com/home" target="_blank" className="pl-1 link" rel="noreferrer">Vercel</a> and
				<a href="https://tailwindcss.com/" target="_blank" className="pl-1 link" rel="noreferrer">Tailwind CSS</a> together with the images from
				<a href="https://storyset.com/technology" target="_blank" rel="noreferrer" className="pl-1 link">Storyset</a>. The code is
				<a href="https://github.com/shbmfu003/professional_dev_portfolio" target="_blank" rel="noreferrer" className="pl-1 link">open-source</a>.
			</div>
			{/* <div className="flex flex-row flex-wrap justify-center w-full sm:space-y-0 md:space-x-2">
				<Attributions className="whitespace-pre hover:underline hover:text-purple-800" />
				<Copyright author="Mfundo Shabalala" className="whitespace-pre" />
			</div> */}
		</section>
		<BackgroundWave />
	</footer>
);

export default Footer;
