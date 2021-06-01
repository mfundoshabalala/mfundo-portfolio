import Link from "next/link";
// components
import NavLink from "./NavLink";
import ToggleTheme from "./ToggleTheme";
import AuthButton from "./AuthButton";

// FIXME: Refactor to separate components
const Header = () => (
  <header className="text-center font-body font-normal tracking-tighter sticky top-0 left-0 flex flex-row justify-between items-center shadow-sm h-16 px-7">
    {/* NOTE: Brand logo */}
    <div className="font-header font-bolder text-5xl">
      <Link href="/">
        <a className="block">MBS</a>
      </Link>
    </div>
    {/* NOTE: Navigation bar */}
    <nav className=" leading-9 flex-1 flex flex-row justify-center">
      <ul className="flex flex-row justify-center space-x-3">
        <NavLink name="Home" url="/" />
        <NavLink name="About" url="/about" />
        <NavLink name="Portfolio" url="/portfolio" />
        <NavLink name="Blog" url="/blog" />
        <NavLink name="Resume" url="/cv" />
      </ul>
    </nav>
    {/* NOTE: Authentication buttons */}
    <form className="space-x-3 leading-9 flex flex-row items-center">
      <AuthButton />
      <button type="button" className="rounded-sm px-3 shadow-sm bg-blue-600 text-gray-50">
        Contact
      </button>
      <ToggleTheme />
    </form>
  </header>
);

export default Header;
