interface NavMenuProps {
	onClick: () => void;
	isOpen: boolean;
}

const NavMenu: React.FC<NavMenuProps> = (props) => {
	const { onClick, isOpen } = props;

	return (
		<button type="button" className="inline-block md:hidden btn" onClick={onClick}>
			{isOpen ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			)}
		</button>
	);
};

export default NavMenu;
