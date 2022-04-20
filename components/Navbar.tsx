import NavItem from './shared/NavItem';
import BrandLogo from './shared/BrandLogo';
import NavbarList from './shared/NavbarList';

const Navbar: React.FunctionComponent = () => (
	<nav className="w-full text-gray-100 h-16 flex items-center opacity-100 shadow-sm bg-slate-800 border-t-2 border-slate-700">
		<div className="container mx-auto px-4 flex justify-between items-center">
			<BrandLogo />
			<NavbarList className="uppercase flex gap-x-6 font-bold">
				<NavItem linkName="About Me" sectionName="about-me" />
				<NavItem linkName="My Projects" sectionName="my-projects" />
				<NavItem linkName="Contact Me" sectionName="contact-me" />
			</NavbarList>
		</div>
	</nav>
);

export default Navbar;
