import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const AuthButton = () => {
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
        <div className="">
          <img src={user?.picture!} alt="user profile" className="rounded-full h-10" />
        </div>
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
