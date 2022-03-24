import Pane from './Pane';
import Container from './Container';

type SplitScreenProps = React.FunctionComponent<{
	children: React.ReactNode[];
	leftWeight?: number;
	rightWeight?: number;
}>;

const SplitScreen: SplitScreenProps = ({ children, leftWeight = 1, rightWeight = 1 }) => {
	const [leftComponent, rightComponent] = children;

	return (
		<Container>
			<Pane weight={leftWeight}>{leftComponent}</Pane>
			<Pane weight={rightWeight}>{rightComponent}</Pane>
		</Container>
	);
};

export default SplitScreen;
