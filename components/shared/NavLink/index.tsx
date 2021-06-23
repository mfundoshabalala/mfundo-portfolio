import Link from 'next/link';
import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

interface INavLink {
	name: string;
	url: string;
}

// FIXME: Make each link an active link when active
const NavLink: FunctionComponent<INavLink> = ({ name, url }) => (
	<div className="flex-1 px-3 transform -translate-x-5 rounded-sm shadow-sm bg-gradient-to-br hover:btn-primary hover:shadow-xl hover:text-white">
		<Link href={url}>
			<a className="block">{name}</a>
		</Link>
	</div>
);

export default NavLink;

NavLink.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
