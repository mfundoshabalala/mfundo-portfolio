import { FunctionComponent } from "react";
// components
// NOTE: Maybe move the social sites to the side of each page and fix
import Copyright from "./components/Copyright";
import SocialLinks from "./components/SocialLinks";
import Attributions from "./components/Attributions";
import Newsletter from "./components/Newsletter";

// TODO: Rethink the design of the footer.
const Footer: FunctionComponent = () => (
	<footer className="border border-solid border-gray-200 mt-12 py-12 px-2 md:px-8 shadow-2xl">
		<div className="container space-y-2 mx-auto flex flex-col flex-wrap justify-between items-center">
			<div className="w-full flex flex-row flex-wrap space-y-2 md:space-y-0 md:space-x-2">
				<Newsletter title="Subscribe to our Newsletter" />
				<SocialLinks title="Connect with me" />
			</div>
			<div className="w-full flex flex-row flex-wrap justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
				<Attributions title="Attributions" />
				<Copyright title="Copyrights" />
			</div>
		</div>
	</footer>
);

export default Footer;
