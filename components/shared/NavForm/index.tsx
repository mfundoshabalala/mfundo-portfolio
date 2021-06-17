import { FunctionComponent } from "react";
// components
import AuthButton from "../AuthButton";
import ToggleTheme from "../ToggleTheme";

const NavForm: FunctionComponent = () => (
	<form className="space-x-4 leading-9 flex flex-row items-center">
		<AuthButton />
		{/* <ToggleTheme /> */}
	</form>
);

export default NavForm;
