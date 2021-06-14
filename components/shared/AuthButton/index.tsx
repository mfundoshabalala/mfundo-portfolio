import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { FunctionComponent } from "react";

const AuthButton: FunctionComponent = () => {
	const { user, isLoading } = useUser();

	if (isLoading) {
		return (
			<Link href="/api/auth/login">
				<a className="rounded-sm px-3 shadow-sm">Log In</a>
			</Link>
		);
	}

	if (user) {
		return (
			<>
				<Link href="/api/auth/logout">
					<a className="rounded-sm px-3 shadow-sm">Log Out</a>
				</Link>
				{/* <div className="">
					<img
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						src={user?.profile!}
						alt="user profile"
						className="rounded-full h-10"
					/>
				</div> */}
			</>
		);
	}

	return (
		<Link href="/api/auth/login">
			<a className="rounded-sm px-3 shadow-sm">Log In</a>
		</Link>
	);
};

export default AuthButton;
