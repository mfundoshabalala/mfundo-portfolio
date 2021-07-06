import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

const AddTitleComponent: FunctionComponent<IAddTitle> = ({ children, title }) => (
	<>
		<div className="flex flex-col items-center justify-center flex-1 space-y-2 md:space-y-4">
			<h1 className="text-xl font-semibold capitalize text-shadow font-body">{title}</h1>
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
	title: '',
};
