import React from 'react';

interface FixedPositionPanelInterface {
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

type FixedPositionPanelProps = React.FunctionComponent<FixedPositionPanelInterface>;

const FixedPositionPanel: FixedPositionPanelProps = ({ children, className }) => (
	<nav className={`border border-slate-600 shadow fixed dark-section rounded-full ${className ?? ''}`}>{children}</nav>
);

export default FixedPositionPanel;
