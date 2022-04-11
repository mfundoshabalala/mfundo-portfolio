import Image from 'next/image';
import { Link, animateScroll as scroll } from 'react-scroll';

const BrandLogo: React.FunctionComponent = () => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="pt-3">
			<Link
				to="my-home"
				className="hover:opacity-100 hover:text-white uppercase text-4xl font-bold"
				onClick={scrollToTop}
			>
				<a href="https://www.fontspace.com/category/cursive">
					<Image
						width={150}
						height={60}
						alt="mfundo"
						src="https://see.fontimg.com/api/renderfont4/BXYx/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TWZ1bmRv/feathergraphy-decoration.png"
					/>
				</a>
			</Link>
		</div>
	);
};

export default BrandLogo;
