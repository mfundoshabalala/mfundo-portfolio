import { NextPage } from "next";
import PropTypes from "prop-types";
// page component(s)
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";
// page props interface(s)
// import BackgroundAnimatedIcon from "components/shared/BackgroundAnimationIcon";

const BasicLayout: NextPage<IBasicLayout> = ({ children }) => (
	<div className="h-full flex flex-col relative">
		<Header />
		<main className="flex-1">{children}</main>
		<Footer />
		{/* <BackgroundAnimatedIcon   /> */}
	</div>
);

export default BasicLayout;

BasicLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
