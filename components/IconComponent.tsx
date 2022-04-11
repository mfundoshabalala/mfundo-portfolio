import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface IconInterface {
	icon: IconProp;
	size?: SizeProp | undefined;
	href?: string;
	bounce?: boolean | undefined;
	download?: string;
	text?: string;
}

type IconComponentProps = React.FunctionComponent<IconInterface>;

const IconComponent: IconComponentProps = ({ icon, size = '2x', href, bounce, download, text }) => (
	<a target="_blank" download={download} href={href} rel="noreferrer" className="flex items-center gap-x-1">
		<FontAwesomeIcon
			bounce={bounce}
			icon={icon}
			size={size}
			className="text-gray-300 hover:text-gray-500 hover:scale-110 hover:transition-transform hover:duration-500"
		/>
		{text && <span className="text-gray-500">{text}</span>}
	</a>
);

export default IconComponent;
