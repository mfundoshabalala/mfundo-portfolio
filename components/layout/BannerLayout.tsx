import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
// components
import Banner from 'components/shared/Banner';

const bannerVariant = {
	hidden: { x: '100vw', opacity: 0 },
	show: { x: 0, opacity: 1, transition: { staggerChildren: 2, type: 'spring', stiffness: 50 } },
	exit: { x: '-100vw', opacity: 0, transition: { duration: 10 } },
};

const BannerLayout: FunctionComponent<IBannerLayout> = ({ children, ...rest }) => (
	<motion.div
		variants={bannerVariant}
		initial="hidden"
		animate="show"
		exit="exit"
		className="flex flex-col w-full min-h-full"
	>
		<Banner {...rest} />
		{children}
	</motion.div>
);

export default BannerLayout;

BannerLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

BannerLayout.propTypes = {
	color: PropTypes.string,
	bgColor: PropTypes.string,
	title: PropTypes.string,
	summary: PropTypes.string,
	quote: PropTypes.string,
};

BannerLayout.defaultProps = {
	color: 'text-gray-50',
	bgColor: 'bg-blue-600',
	title: '',
	summary: '',
	quote: undefined,
};
