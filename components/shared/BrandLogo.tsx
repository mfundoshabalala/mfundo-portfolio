import { Link, animateScroll as scroll } from 'react-scroll';

const BrandLogo: React.FunctionComponent = () => {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	return (
		<div className="">
			<Link
				to="my-home"
				className="hover:opacity-100 hover:text-white uppercase text-4xl font-bold"
				onClick={scrollToTop}
			>
				M
			</Link>
		</div>
	);
};

export default BrandLogo;
