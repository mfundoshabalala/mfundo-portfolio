import { FunctionComponent } from "react";
import PropTypes from "prop-types";
// components
import Banner from "components/shared/Banner";

const BannerLayout: FunctionComponent<IBannerLayout> = ({ children, color, bgColor, title, summary, quote }) => (
	<>
		<div className="min-h-full w-full flex flex-col space-y-6">
			<Banner color={color} bgColor={bgColor} title={title} summary={summary} quote={quote} />
			{children}
		</div>
	</>
);

export default BannerLayout;

BannerLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

BannerLayout.propTypes = {
	color: PropTypes.string,
	bgColor: PropTypes.string,
	title: PropTypes.string,
	summary: PropTypes.string,
	quote: PropTypes.string,
};

BannerLayout.defaultProps = {
	color: "text-gray-50",
	bgColor: "bg-blue-600",
	title: "",
	summary: "",
	quote: undefined,
};
