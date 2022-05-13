import PropTypes from 'prop-types';

const AddTitleComponent: React.FC<IAddTitle> = ({ children, title }) => (
	<>
		<div className="flex flex-col items-center flex-1 gap-y-4 drop-shadow-sm">
			<h1 className="text-xl font-thin">{title}</h1>
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
