import PropTypes from "prop-types";
import { FunctionComponent } from "react";
// page component(s)
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

export const BackgroundWave: FunctionComponent = () => (
	<>
		<div className="w-full h-1/3 bg-wave bg-no-repeat bg-cover bg-center z-0 absolute bottom-0 left-0" />
	</>
);

const BasicLayout: FunctionComponent<IBasicLayout> = ({ children }) => (
	<div className="h-full flex flex-col relative text-gray-600 overflow-x-hidden">
		<Header />
		<main className="flex-1 relative z-10">{children}</main>
		<Footer />
		<BackgroundWave />
	</div>
);

export default BasicLayout;

BasicLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
