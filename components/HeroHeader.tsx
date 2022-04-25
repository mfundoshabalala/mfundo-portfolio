//
import Title from './shared/Title';
import Subtitle from './shared/Subtitle';
import BlockQuote from './shared/BlockQuote';

const HeroHeader: React.FunctionComponent = () => (
	<div className="flex flex-col gap-2 uppercase select-none drop-shadow justify-center -mb-10">
		<Title />
		<Subtitle subtitle="I help build user-friendly and accessible websites." />
		<BlockQuote
			author="Cory House"
			cite="https://twitter.com/mfundo_shabalala"
			className="tracking-tighter border border-slate-600 mt-4 shadow bg-slate-900"
		>
			Code is like humor. When you have to explain it, it’s bad.
		</BlockQuote>
	</div>
);

export default HeroHeader;
