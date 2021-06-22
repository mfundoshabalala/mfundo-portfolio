import { FunctionComponent } from 'react';
// components
import Navbar from '../Navbar';
import BrandLogo from '../BrandLogo';
import NavForm from '../NavForm';

const Header: FunctionComponent = () => (
	<header className="sticky top-0 left-0 z-30 flex flex-row items-center justify-between h-16 px-8 py-6 font-normal tracking-tight text-center bg-gray-100 border border-gray-200 border-solid font-body">
		<BrandLogo />
		<Navbar />
		<NavForm />
	</header>
);

export default Header;
