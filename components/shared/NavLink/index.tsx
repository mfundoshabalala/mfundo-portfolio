import Link from "next/link";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FunctionComponent } from "react";

interface INavLink {
	name: string;
	url: string;
	bgColor?: string;
}

// FIXME: Make each link an active link when active
const NavLink: FunctionComponent<INavLink> = props => {
	const { name, url, bgColor = "indigo-500" } = props;
	return (
		<div
			className={classnames(
				`hover:bg-${bgColor}`,
				"transform -translate-x-5 flex-1 hover:text-white rounded-sm px-3 shadow-sm"
			)}
		>
			<Link href={url}>
				<a className="block">{name}</a>
			</Link>
		</div>
	);
};

export default NavLink;

NavLink.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	bgColor: PropTypes.string,
};

NavLink.defaultProps = {
	bgColor: "indigo-500",
};
