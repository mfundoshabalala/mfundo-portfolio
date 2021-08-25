import { motion } from 'framer-motion';

const imageVariant = {
	hidden: { x: -200, opacity: 0 },
	show: { x: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
	exit: { x: -200, opacity: 0, transition: { duration: 0.2 } },
};

const IntroductionImage: React.FC = () => (
	<motion.div
		key="introductionImage"
		variants={imageVariant}
		initial="hidden"
		animate="show"
		exit="exit"
		className="relative flex-1 hidden bg-center bg-no-repeat bg-contain md:block bg-clip-content"
		style={{ backgroundImage: `url(/images/svg/programmer-animate-2.svg)` }}
	/>
);

export default IntroductionImage;
