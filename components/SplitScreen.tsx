import Container from './Container';
import Pane from './Pane';

interface SplitScreenInterface {
	children: React.ReactNode[];
	leftWeight?: number;
	rightWeight?: number;
}

type SplitScreenProps = React.FunctionComponent<SplitScreenInterface>;

const SplitScreen: SplitScreenProps = ({ children, leftWeight = 1, rightWeight = 1 }) => {
	const [left, right] = children;

	return (
		<Container className="flex flex-wrap gap-4">
			<Pane weight={leftWeight}>{left}</Pane>
			<Pane weight={rightWeight}>{right}</Pane>
		</Container>
	);
};

export default SplitScreen;
