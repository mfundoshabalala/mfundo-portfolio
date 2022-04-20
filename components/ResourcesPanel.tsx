import IconComponent from './shared/IconComponent';
import FixedPositionPanel from './shared/FixedPositionPanel';

const ResourcesPanel: React.FunctionComponent = () => (
	<>
		<FixedPositionPanel className="bottom-20 left-4 py-4 px-3 flex flex-col justify-center gap-y-2">
			<IconComponent
				icon={['fab', 'github']}
				href={process.env.NEXT_PUBLIC_GITHUB_USER_PROFILE}
			/>
			<IconComponent
				icon={['fab', 'linkedin-in']}
				href={process.env.NEXT_PUBLIC_LINKEDIN_USER_PROFILE}
			/>
			<IconComponent
				icon={['fab', 'twitter']}
				href={process.env.NEXT_PUBLIC_TWITTER_USER_PROFILE}
			/>
		</FixedPositionPanel>
		<FixedPositionPanel className="bottom-10 mb-12 right-4 flex items-center p-3">
			<IconComponent
				bounce
				size="lg"
				icon={['fas', 'cloud-arrow-down']}
				href={process.env.NEXT_PUBLIC_CV_URL}
			/>
		</FixedPositionPanel>
	</>
);

export default ResourcesPanel;
