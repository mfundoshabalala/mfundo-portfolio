import { FunctionComponent } from "react";
// components
import AuthButton from "../AuthButton";

const NavForm: FunctionComponent = () => (
	<form className="space-x-4 leading-9 flex flex-row items-center">
		<AuthButton />
	</form>
);

export default NavForm;
