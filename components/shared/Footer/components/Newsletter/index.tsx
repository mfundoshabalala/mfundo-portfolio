/* eslint-disable arrow-body-style */
import { FunctionComponent } from "react";
import PropTypes from "prop-types";
//
import AddTitleComponent from "../AddTitleComponent";

const Newsletter: FunctionComponent<ITitledComponent> = ({ className, title }) => {
	return (
		<>
			<AddTitleComponent title={title}>
				<h1 className={className}>Newsletter</h1>
			</AddTitleComponent>
		</>
	);
};

export default Newsletter;

Newsletter.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
};

Newsletter.defaultProps = {
	title: "",
	className: "",
};
