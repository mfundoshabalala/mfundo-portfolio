import { FunctionComponent } from "react";
// components
import Navbar from "../Navbar";
import BrandLogo from "../BrandLogo";
import NavForm from "../NavForm";

const Header: FunctionComponent = () => (
	<header className="bg-gray-100 text-center font-body font-normal tracking-tight sticky top-0 left-0 flex flex-row justify-between items-center h-16 px-8 py-6">
		<BrandLogo />
		<Navbar />
		<NavForm />
	</header>
);

export default Header;
