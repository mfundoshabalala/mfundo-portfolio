type HeaderProps = React.FunctionComponent<{
	children: React.ReactNode;
	className: string;
}>;

const Header: HeaderProps = ({ children, className }) => (
	<header className={` ${className}`}>{children}</header>
);

export default Header;
