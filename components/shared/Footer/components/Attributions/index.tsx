import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
// component(s)
import AddTitleComponent from '../AddTitleComponent';

const Attributions: FunctionComponent<ITitledComponent> = ({ className, title }) => (
	<>
		<AddTitleComponent title={title}>
			<div className={className}>
				<a href="https://storyset.com/technology">Illustration by Freepik Storyset</a>
			</div>
		</AddTitleComponent>
	</>
);

export default Attributions;

Attributions.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
};

Attributions.defaultProps = {
	title: '',
	className: '',
};
