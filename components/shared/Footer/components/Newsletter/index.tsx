/* eslint-disable arrow-body-style */
import { FunctionComponent } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
//
import AddTitleComponent from "../AddTitleComponent";

const Newsletter: FunctionComponent<ITitledComponent> = ({ className, title }) => {
	return (
		<>
			<AddTitleComponent title={title}>
				<form className="w-4/5 flex flex-row flex-nowrap justify-center items-center space-x-2">
					<input
						type="text"
						className={classnames(className, "flex-1 py-2 px-4 border border-solid border-gray-300 shadow rounded")}
						placeholder="Please enter your email"
					/>
					<button
						type="submit"
						className="py-2 px-4 shadow rounded bg-indigo-500 hover:bg-indigo-700 text-md text-shadow text-gray-50"
					>
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
	title: "",
	className: "",
};
