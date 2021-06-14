import { FunctionComponent } from "react";
import PropTypes from "prop-types";

const Copyright: FunctionComponent<{ className?: string; author?: string }> = ({ className, author }) => (
	<>
		<div className={className}>&copy; Copyrights Reserved by {author}</div>
	</>
);

export default Copyright;

Copyright.propTypes = {
	className: PropTypes.string,
	author: PropTypes.string,
};

Copyright.defaultProps = {
	className: "",
	author: "",
};
