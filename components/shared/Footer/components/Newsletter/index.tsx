/* eslint-disable arrow-body-style */
import { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
//
import AddTitleComponent from '../AddTitleComponent';

const Newsletter: React.FC<ITitledComponent> = ({ className, title }) => {
	const [value, setValue] = useState('');
	const [, setError] = useState('');

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (value === '') setError('Please fill up email field.');

		if (value !== '') {
			// console.log(error);
			// eslint-disable-next-line no-alert
			alert(`Email ${value} has subscribed. Congratulations!!!`);
			setValue('');
			setError('');
		}
	};

	return (
		<>
			<AddTitleComponent title={title}>
				<form
					onSubmit={handleSubmit}
					className="flex flex-row items-center w-full h-full max-w-md px-8 space-x-2 md:w-3/5 md:px-0 flex-nowrap"
				>
					<input
						type="text"
						value={value}
						onChange={handleChange}
						placeholder="Please enter your email"
						className={classnames(
							className,
							'flex-1 py-2 px-4 border border-solid border-gray-300 shadow-md focus:shadow-sm rounded'
						)}
					/>
					<button type="submit" className="shadow-md focus:shadow-sm active:shadow-sm btn btn-primary">
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
