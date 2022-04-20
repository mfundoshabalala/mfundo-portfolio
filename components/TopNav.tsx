import Container from './shared/Container';
import IconComponent from './shared/IconComponent';

const TopNav: React.FunctionComponent = () => (
	<Container className="flex gap-x-6 items-center justify-end py-2">
		<IconComponent
			size="lg"
			icon={['fas', 'at']}
			href="https://github.com/shbmfu003"
			text="mfundoshabalala@gmail.com"
		/>
		<IconComponent
			size="lg"
			icon={['fas', 'phone-alt']}
			href="https://github.com/shbmfu003"
			text="060-484-3666"
		/>
	</Container>
);

export default TopNav;
