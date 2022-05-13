import PropTypes from 'prop-types';
import classNames from 'classnames';

interface IconProps {
	icon: string;
	height?: string;
	width?: string;
	opacity?: string;
}

const IconComponent: React.FC<IconProps> = (props) => {
	const { icon, height = 'h-5', width = 'w-5', opacity = 'opacity-100' } = props;
	return (
		<svg className={classNames(height, width, opacity, 'block')}>
			<use xlinkHref={`/sprite.svg#${icon}`} />
		</svg>
	);
};

export default IconComponent;

IconComponent.propTypes = {
	icon: PropTypes.string.isRequired,
	height: PropTypes.string,
	width: PropTypes.string,
	opacity: PropTypes.string,
};

IconComponent.defaultProps = {
	height: 'h-5',
	width: 'w-5',
	opacity: 'opacity-80',
};
