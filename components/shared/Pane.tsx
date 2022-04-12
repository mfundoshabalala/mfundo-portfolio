import React from 'react';

interface PaneInterface {
	weight: number;
	className?: string | undefined;
}

type PaneProps = React.FunctionComponent<PaneInterface>;

const Pane: PaneProps = ({ children, weight, className }) => (
	<div style={{ flex: weight }} className={className ?? ''}>
		{children}
	</div>
);

export default Pane;
