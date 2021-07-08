import Link from 'next/link';
import PropTypes from 'prop-types';
import {useRouter} from "next/router";
import classNames from "classnames";

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ children, href }) => {
	const router = useRouter();

	const handleClick = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		// eslint-disable-next-line no-void
		void router.push(href);
	};

	return (
		<li
			className={classNames(
				'btn transform -translate-x-5',
				router.asPath === href ? 'btn-primary' : ''
			)}
		>
			<Link href={href}>
				<a className="" onClick={handleClick} aria-hidden="true">
					{children}
				</a>
			</Link>
		</li>
	);
};

export default NavLink;

NavLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
