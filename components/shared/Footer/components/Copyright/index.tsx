import { FunctionComponent } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
// component(s)
import AddTitleComponent from "../AddTitleComponent";

interface ICopyright extends ITitledComponent {
	author?: string;
}

const Copyright: FunctionComponent<ICopyright> = ({ className, author, title }) => (
	<>
		<AddTitleComponent title={title}>
			<div className={classnames(className, "italic")}>
				&copy; Copyrights Reserved by <span className="hover:underline">{author}</span>
			</div>
		</AddTitleComponent>
	</>
);

export default Copyright;

Copyright.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
};

Copyright.defaultProps = {
	className: "",
	title: "",
	author: "",
};
