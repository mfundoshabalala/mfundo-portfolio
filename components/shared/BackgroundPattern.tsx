type BackgroundPatternProps = React.FunctionComponent<{
	className?: string;
}>;

const BackgroundPattern: BackgroundPatternProps = ({ className = '' }) => (
	<div
		className={`absolute top-0 left-0 w-full min-h-screen z-10 opacity-5 ${className}`}
	/>
);

export default BackgroundPattern;
