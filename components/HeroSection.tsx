import BlockQuote from './shared/BlockQuote';
import Subtitle from './shared/Subtitle';
import Title from './shared/Title';

const HeroSection: React.FunctionComponent = () => (
	<div className="flex flex-col gap-2 uppercase select-none drop-shadow justify-center -mb-10">
		<Title />
		<Subtitle subtitle="I help build user-friendly and accessible websites." />
		<BlockQuote
			cite="https://twitter.com/mfundo_shabalala"
			author="Cory House"
			className="tracking-tighter border border-slate-600 mt-4 shadow bg-slate-900"
		>
			Code is like humor. When you have to explain it, it’s bad.
		</BlockQuote>
	</div>
);

export default HeroSection;
