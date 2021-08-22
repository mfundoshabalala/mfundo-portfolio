import BackgroundWave from './components/BackgroundWave';
import Newsletter from './components/Newsletter';
import SocialLinks from './components/SocialLinks';

const Footer: React.FC = () => (
	<footer className="relative pt-10 pb-5 font-light text-gray-900 border">
		<section className="container relative z-10 flex flex-col justify-between mx-auto gap-y-8">
			<section className="flex flex-row flex-wrap justify-between gap-4">
				<Newsletter title="Subscribe to my newsletter" />
				<SocialLinks title="Connect with me" />
			</section>
			<section className="text-base text-center">
				Made from scratch using <a href="https://nextjs.org" target="_blank" className="pl-1 link" rel="noreferrer">Next.js</a>,
				<a href="https://vercel.com/home" target="_blank" className="pl-1 link" rel="noreferrer">Vercel</a> and
				<a href="https://tailwindcss.com/" target="_blank" className="pl-1 link" rel="noreferrer">Tailwind CSS</a> together with the images from
				<a href="https://storyset.com/technology" target="_blank" rel="noreferrer" className="pl-1 link">Storyset</a>. The code is
				<a href="https://github.com/shbmfu003/professional_dev_portfolio" target="_blank" rel="noreferrer" className="pl-1 link">open-source</a>.
			</section>
		</section>
		<BackgroundWave />
	</footer>
);

export default Footer;
