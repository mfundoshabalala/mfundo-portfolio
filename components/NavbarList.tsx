interface NavbarListInterface {
	children: React.ReactNode;
	className?: string;
}

type NavbarListProps = React.FunctionComponent<NavbarListInterface>;

const NavbarList: NavbarListProps = ({ children, className }) => <ul className={className}>{children}</ul>;

export default NavbarList;
