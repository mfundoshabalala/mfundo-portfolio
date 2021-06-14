import { FunctionComponent } from "react";
// components
// import Attributions from "../Attributions";
import Copyright from "../Copyright";
// NOTE: Maybe move the social sites to the side of each page and fix
import SocialLinks from "./components/SocialLinks";

// TODO: Rethink the design of the footer.
const Footer: FunctionComponent = () => (
	<footer className="border border-solid border-gray-200 mt-12 py-12 px-2 md:px-8 shadow-2xl">
		<div className="container space-y-2 mx-auto flex flex-col flex-wrap justify-between items-center">
			<div className="w-full flex flex-row flex-wrap space-y-2 md:space-y-0 md:space-x-2">
				<div className="bg-rose-500 flex-1">item-1</div>
				<div className="bg-rose-500 flex-1">item-2</div>
			</div>
			<div className="w-full flex flex-row flex-wrap justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
				<SocialLinks className="flex-1" />
				<Copyright className="flex-1" />
			</div>
		</div>
	</footer>
);

export default Footer;
