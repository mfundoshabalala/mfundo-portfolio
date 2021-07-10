import Link from 'next/link';

const BrandLogo: React.FC = () => (
	<div className="px-1 py-2 text-4xl font-black text-transparent min-w-max font-firaSans bg-gradient-to-r bg-clip-text from-gray-900 via-gray-800 to-gray-700">
		<Link href="/">
			<a className="block tracking-tighter hover:line-through min-w-max">
				Mfundo<sub className="bg-gradient-to-r bg-clip-text from-gray-900 via-gray-800 to-gray-700">92</sub>
			</a>
		</Link>
	</div>
);

export default BrandLogo;
