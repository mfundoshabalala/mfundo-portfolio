//
import Header from 'components/Header';
import TopNav from 'components/TopNav';
import Navbar from 'components/Navbar';
import IconComponent from 'components/IconComponent';
import FixedPositionPanel from 'components/FixedPositionPanel';
//

type BasicSiteLayoutProps = React.FunctionComponent<{
	children: React.ReactChild;
}>;

const BasicSiteLayout: BasicSiteLayoutProps = ({ children }) => (
	<>
		<Header className="flex flex-col dark-section">
			<TopNav />
			<Navbar />
		</Header>

		<>{children}</>
		<FixedPositionPanel className="bottom-20 left-2 py-4 px-3 flex flex-col justify-center gap-y-2">
			<IconComponent icon={['fab', 'github']} href="https://github.com/shbmfu003" />
			<IconComponent icon={['fab', 'linkedin-in']} href="https://www.linkedin.com/in/mfundoshabalala" />
			<IconComponent icon={['fab', 'twitter']} href="https://www.twitter.com/datarist" />
		</FixedPositionPanel>
		<FixedPositionPanel className="bottom-20 mb-12 right-2 flex items-center p-3">
			<IconComponent bounce size="lg" icon={['fas', 'cloud-arrow-down']} href={process.env.NEXT_PUBLIC_CV_URL} />
		</FixedPositionPanel>
	</>
);

export default BasicSiteLayout;
