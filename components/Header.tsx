type HeaderProps = React.FunctionComponent<{
	children: React.ReactNode;
	className: string;
}>;

const Header: HeaderProps = ({ children, className }) => (
	<header className={`w-full fixed top-0 left-0 z-50 ${className}`}>{children}</header>
);

export default Header;
