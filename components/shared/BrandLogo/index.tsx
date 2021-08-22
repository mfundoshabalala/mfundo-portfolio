import Link from 'next/link';

const BrandLogo: React.FC = () => (
	<div className="px-1 py-2 text-2xl font-black tracking-tighter text-transparent min-w-max font-firaSans bg-gradient-to-r bg-clip-text from-gray-700 to-gray-600">
		<Link href="/">
			<a className="block mx-2 uppercase hover:line-through min-w-max">
				Mfundo Shabalala
			</a>
		</Link>
	</div>
);

export default BrandLogo;
