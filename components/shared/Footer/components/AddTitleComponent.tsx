import { FunctionComponent } from "react";
import PropTypes from "prop-types";

const AddTitleComponent: FunctionComponent<IAddTitle> = ({ children, title }) => (
	<>
		<div className="flex-1 flex flex-col justify-center items-center space-y-4">
			<h1 className="capitalize font-body font-semibold text-xl">{title}</h1>
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
