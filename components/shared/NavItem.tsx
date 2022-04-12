import { Link } from 'react-scroll';

interface NavItemInterface {
	linkName: string;
	sectionName: string;
	duration?: number;
	activeClass?: string | 'active';
}

type NavItemProps = React.FunctionComponent<NavItemInterface>;

const NavItem: NavItemProps = ({
	linkName,
	sectionName,
	activeClass = 'active',
}) => (
	<li className="">
		<Link
			className="hover:opacity-100 hover:underline underline-offset-4 decoration-wavy decoration-2 decoration-orange-400 tracking-wide cursor-pointer"
			activeClass={activeClass}
			to={sectionName}
			smooth
		>
			{linkName}
		</Link>
	</li>
);

export default NavItem;
