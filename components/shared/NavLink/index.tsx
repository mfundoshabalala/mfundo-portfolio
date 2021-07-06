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
		<div
			className={classNames(
				router.asPath === href ? 'text-white btn-primary' : '',
				'flex-1 px-3 transform -translate-x-5 rounded-sm shadow-sm bg-gradient-to-br hover:btn-primary hover:shadow-xl hover:text-white'
			)}
		>
			<Link href={href}>
				<a className="block" onClick={handleClick} aria-hidden="true">
					{children}
				</a>
			</Link>
		</div>
	);
};

export default NavLink;

NavLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
