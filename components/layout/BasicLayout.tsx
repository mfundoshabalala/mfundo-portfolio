import { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
// page component(s)
import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

const BasicLayout: FunctionComponent<IBasicLayout> = ({ children }) => (
	<div className="relative flex flex-col h-screen overflow-x-hidden text-gray-600">
		<Header />
		<motion.main initial="initial" animate="enter" exit="exit" className="relative z-10 flex-1">
			{children}
		</motion.main>
		<Footer />
	</div>
);

export default BasicLayout;

BasicLayout.propTypes = {
	children: PropTypes.node.isRequired,
};
