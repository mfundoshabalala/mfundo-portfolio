import Link from "next/link";
import { FunctionComponent } from "react";

const BrandLogo: FunctionComponent = () => (
	<div className="font-black text-5xl">
		<Link href="/">
			<a className="block">
				<span className="">M</span>
				<span className="">f</span>
				<span className="">u</span>
				<span className="">n</span>
				<span className="">d</span>
				<span className="">o</span>
			</a>
		</Link>
	</div>
);

export default BrandLogo;
