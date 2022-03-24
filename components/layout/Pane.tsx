type PaneProps = React.FunctionComponent<{
	weight?: number;
	children: React.ReactNode;
}>;

const Pane: PaneProps = ({ weight, children }) => (
	<div style={{ flex: weight }} className="h-full">
		{children}
	</div>
);

export default Pane;
