import { FunctionComponent } from "react";
// components
import NavLink from "components/shared/NavLink";

const Navbar: FunctionComponent = () => (
	<>
		<nav className="leading-9 flex-1 flex flex-row justify-center">
			<ul className="flex flex-row justify-center space-x-3">
				<NavLink name="About" url="/about" />
				<NavLink name="Portfolio" url="/portfolio" />
				<NavLink name="Blog" url="/blog" />
				<NavLink name="Resume" url="/cv" />
				<NavLink name="Contact" url="/contact" />
			</ul>
		</nav>
	</>
);

export default Navbar;
