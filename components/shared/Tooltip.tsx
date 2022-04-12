import React from 'react';

interface TooltipInterface {
	id: string;
	title: string;
}

type TooltipTypes = React.FunctionComponent<TooltipInterface>;

const Tooltip: TooltipTypes = ({ id = 'tooltip-default', title }) => (
	<div
		id={id}
		role="tooltip"
		className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
	>
		{title}
		<div className="tooltip-arrow" data-popper-arrow />
	</div>
);

export default Tooltip;
