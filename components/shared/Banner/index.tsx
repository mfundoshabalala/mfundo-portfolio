import PropTypes from "prop-types";
import classnames from "classnames";
import { FunctionComponent } from "react";

const Banner: FunctionComponent<IBanner> = ({ color, bgColor, title, summary }) => (
	<>
		<div className={classnames(bgColor, "py-14 shadow-custom text-shadow")}>
			<div className={classnames(color, "space-y-2 h-full container flex flex-col justify-center items-center")}>
				<h1 className="text-5xl font-body font-bold">{title}</h1>
				<h2 className="text-lg">{summary}</h2>
			</div>
		</div>
	</>
);

export default Banner;

Banner.propTypes = {
	color: PropTypes.string,
	bgColor: PropTypes.string,
	title: PropTypes.string,
	summary: PropTypes.string,
};

Banner.defaultProps = {
	color: "text-gray-50",
	bgColor: "bg-blue-600",
	title: "",
	summary: "",
};
