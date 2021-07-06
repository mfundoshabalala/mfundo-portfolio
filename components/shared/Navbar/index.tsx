import { FunctionComponent } from 'react';
// components
import NavLink from 'components/shared/NavLink';

const Navbar: FunctionComponent = () => (
	<>
		<nav className="flex flex-row justify-center flex-1 leading-9">
			<ul className="flex flex-row justify-center space-x-3">
				<NavLink href="/about">About</NavLink>
				<NavLink href="/portfolio">
					Portfolio
				</NavLink>
				<NavLink href="/blog">
					Blog
				</NavLink>
				<NavLink href="/cv">
					Resume
				</NavLink>
				<NavLink href="/contact">
					Contact
				</NavLink>
			</ul>
		</nav>
	</>
);

export default Navbar;
