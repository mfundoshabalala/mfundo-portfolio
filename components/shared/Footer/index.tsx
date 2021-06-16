import { FunctionComponent } from "react";
// components
// NOTE: Maybe move the social sites to the side of each page and fix
import Copyright from "./components/Copyright";
import SocialLinks from "./components/SocialLinks";
import Attributions from "./components/Attributions";
import Newsletter from "./components/Newsletter";

export const BackgroundWave: FunctionComponent = () => (
	<>
		<div className="w-full h-1/3 bg-wave bg-no-repeat bg-cover bg-center z-0 absolute bottom-0 left-0" />
	</>
);

// TODO: Rethink the design of the footer.
const Footer: FunctionComponent = () => (
	<footer className="relative border border-solid border-gray-200 mt-12 pt-8 pb-2 px-2 md:px-8 shadow-2xl">
		<div className="relative z-10 container space-y-3 mx-auto flex flex-col flex-wrap justify-between items-center">
			<div className="w-full flex flex-row flex-wrap space-y-2 md:space-y-0 md:space-x-2">
				<Newsletter title="Subscribe to our Newsletter" />
				<SocialLinks title="Connect with me" />
			</div>
			<div className="w-full flex flex-row flex-wrap space-y-2 md:space-y-0 md:space-x-2">
				<Attributions />
				<Copyright author="Mfundo Shabalala" />
			</div>
		</div>
		<BackgroundWave />
	</footer>
);

export default Footer;
