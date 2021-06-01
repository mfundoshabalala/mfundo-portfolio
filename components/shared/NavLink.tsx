import Link from "next/link";
import PropTypes from "prop-types";

interface INavLink {
  name: string;
  url: string;
}

// FIXME: Make each link an active link when active
const NavLink: React.FC<INavLink> = props => {
  const { name, url } = props;
  return (
    <div className=" transform -translate-x-5 flex-1 hover:bg-purple-700 hover:text-white rounded-sm px-3 shadow-sm">
      <Link href={url}>
        <a className=" block">{name}</a>
      </Link>
    </div>
  );
};

export default NavLink;

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
