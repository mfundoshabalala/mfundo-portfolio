import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import { FunctionComponent } from 'react';

const AuthButton: FunctionComponent = () => {
	const { user, isLoading } = useUser();

	if (isLoading) {
		return (
			<Link href="/api/auth/login">
				<a className="btn">Log In</a>
			</Link>
		);
	}

	if (user) {
		return (
			<>
				<Link href="/api/auth/logout">
					<a className="btn">Log Out</a>
				</Link>
			</>
		);
	}

	return (
		<Link href="/api/auth/login">
			<a type="button" className="btn">
				Log In
			</a>
		</Link>
	);
};

export default AuthButton;
