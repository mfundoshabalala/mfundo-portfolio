// import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Banner from 'components/shared/Banner';

const BannerLayout: React.FC<IBannerLayout> = ({ children, ...rest }) => (
	<div
		className="flex flex-col w-full min-h-full"
	>
		<Banner {...rest} />
		{children}
	</div>
);

export default BannerLayout;

BannerLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
