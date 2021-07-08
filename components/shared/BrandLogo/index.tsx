import Link from 'next/link';

const BrandLogo: React.FC = () => (
	<div className="px-1 py-2 text-4xl font-black text-transparent bg-gradient-to-r bg-clip-text from-gray-900 via-gray-600 to-gray-900">
		<Link href="/">
			<a className="block tracking-tighter uppercase">
				<span className="inline-block">M</span>
				<span className="inline-block">f</span>
				<span className="inline-block">u</span>
				<span className="inline-block">n</span>
				<span className="inline-block">d</span>
				<span className="inline-block">o</span>
			</a>
		</Link>
	</div>
);

export default BrandLogo;
