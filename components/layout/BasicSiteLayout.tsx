import TopNav from 'components/TopNav';
import Navbar from 'components/Navbar';
import Header from 'components/shared/Header';
import ResourcesPanel from 'components/ResourcesPanel';

type BasicSiteLayoutProps = React.FunctionComponent<{
	children: React.ReactChild;
}>;

const BasicSiteLayout: BasicSiteLayoutProps = ({ children }) => (
	<>
		<Header className="flex flex-col bg-slate-800 w-full fixed top-0 left-0 z-50">
			<TopNav />
			<Navbar />
		</Header>
		<main className="relative z-40">{children}</main>
		{/* <footer>Footer Component</footer> */}
		<ResourcesPanel />
	</>
);

export default BasicSiteLayout;
