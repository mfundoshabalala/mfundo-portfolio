import Link from 'next/link';

const BrandLogo: React.FC = () => (
	<div className="px-1 py-2 text-[40px] font-black text-transparent min-w-max font-firaSans bg-gradient-to-r bg-clip-text from-gray-700 to-gray-600">
		<Link href="/">
			<a className="block uppercase hover:line-through min-w-max">
				MFUNDO<sub className="bg-gradient-to-r bg-clip-text from-gray-700 to-gray-600">92</sub>
			</a>
		</Link>
	</div>
);

export default BrandLogo;
