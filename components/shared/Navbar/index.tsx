import { FunctionComponent } from "react";
// components
import NavLink from "components/shared/NavLink";

const Navbar: FunctionComponent = () => (
	<>
		<nav className="leading-9 flex-1 flex flex-row justify-center">
			<ul className="flex flex-row justify-center space-x-3">
				<NavLink name="About" url="/about" />
				<NavLink name="Portfolio" url="/portfolio" bgColor="blue-500" />
				<NavLink name="Blog" url="/blog" bgColor="green-500" />
				<NavLink name="Resume" url="/cv" bgColor="yellow-500" />
				<NavLink name="Contact" url="/contact" bgColor="gray-500" />
			</ul>
		</nav>
	</>
);

export default Navbar;
