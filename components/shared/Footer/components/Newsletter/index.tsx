/* eslint-disable arrow-body-style */
import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
//
import AddTitleComponent from '../AddTitleComponent';

const Newsletter: FunctionComponent<ITitledComponent> = ({ className, title }) => {
	return (
		<>
			<AddTitleComponent title={title}>
				<form className="flex flex-row items-center justify-center w-full max-w-md px-8 space-x-2 md:w-3/5 md:px-0 flex-nowrap">
					<input
						type="text"
						className={classnames(className, 'flex-1 py-2 px-4 border border-solid border-gray-300 shadow rounded')}
						placeholder="Please enter your email"
					/>
					<button type="submit" className="btn btn-primary">
						Subscribe
					</button>
				</form>
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
	title: '',
	className: '',
};
