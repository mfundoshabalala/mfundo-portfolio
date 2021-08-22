import { useState } from 'react';
import BrandLogo from '../BrandLogo';
import Navbar from '../Navbar';
import NavMenu from '../NavMenu';

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 left-0 z-30 flex flex-row items-center justify-between h-16 px-6 py-6 font-normal tracking-tight text-center bg-gray-100 border border-gray-200 border-solid md:px-6">
			<BrandLogo />
			<Navbar isOpen={isOpen} />
			<NavMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
		</header>
	);
};

export default Header;
