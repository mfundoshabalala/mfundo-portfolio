import { FunctionComponent } from "react";
import PropTypes from "prop-types";

const AddTitleComponent: FunctionComponent<IAddTitle> = ({ children, title }) => (
	<>
		<div className="flex-1 flex flex-col justify-start">
			<h1 className="text-2xl">{title}</h1>
			<>{children}</>
		</div>
	</>
);

export default AddTitleComponent;

AddTitleComponent.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
};

AddTitleComponent.defaultProps = {
	title: "",
};
