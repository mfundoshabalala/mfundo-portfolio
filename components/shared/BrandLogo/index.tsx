import Link from 'next/link';
import { FunctionComponent } from 'react';

const BrandLogo: FunctionComponent = () => (
	<div className="px-1 py-2 text-4xl font-black">
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
