import Link from "next/link";
import { FunctionComponent } from "react";

const BrandLogo: FunctionComponent = () => (
	<div className="font-black text-5xl px-1 py-2">
		<Link href="/">
			<a className="block text-gray-50">
				<span className="bg-blue-500 border-2 border-solid border-green-500">M</span>
				<span className="bg-green-500 border-2 border-solid border-blue-500">F</span>
			</a>
		</Link>
	</div>
);

export default BrandLogo;
