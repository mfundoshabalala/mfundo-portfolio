//
import FixedPositionPanel from 'components/FixedPositionPanel';
import IconComponent from 'components/IconComponent';
import Navbar from 'components/Navbar';
//

interface ChildrenProps {
	children: React.ReactNode;
}

type BasicSiteLayoutProps = React.FunctionComponent<ChildrenProps>;

const BasicSiteLayout: BasicSiteLayoutProps = ({ children }) => (
	<>
		<Navbar />
		<>{children}</>
		<FixedPositionPanel>
			<IconComponent icon={['fab', 'github']} href="https://github.com/shbmfu003" />
			<IconComponent icon={['fab', 'linkedin-in']} href="https://www.linkedin.com/in/mfundoshabalala" />
			<IconComponent icon={['fab', 'twitter']} href="https://www.twitter.com/datarist" />
		</FixedPositionPanel>
	</>
);

export default BasicSiteLayout;
