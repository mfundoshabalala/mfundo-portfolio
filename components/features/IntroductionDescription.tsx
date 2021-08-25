import Link from 'next/link';
import { motion } from 'framer-motion';

const textVariant = {
	hidden: { x: 200, opacity: 0 },
	show: { x: 0, opacity: 1, transition: { duration: 0.2 } },
	exit: { x: 200, opacity: 0, transition: { duration: 0.2 } },
};

const IntroductionDescription: React.FC = () => (
	<motion.div
		key="introductionText"
		variants={textVariant}
		initial="hidden"
		animate="show"
		exit="exit"
		className="relative flex flex-col items-center justify-center flex-1 space-y-8"
	>
		<div className="space-y-4 text-center">
			<p className="text-4xl font-black uppercase drop-shadow-lg font-firaSans">
				Hello, I&apos;m <br />
				<span className="text-transparent bg-gradient-to-r from-blue-700 via-green-600 to-blue-700 bg-clip-text">
					Mfundo Bright Shabalala
				</span>
			</p>
			<p className="max-w-prose text-md">
				I love to code and dream. I tweet about things that I learned being a full stack web developer.
			</p>
		</div>
		<div className="flex flex-row items-center justify-center max-w-lg space-x-8">
			<Link href="/portfolio" passHref>
				<motion.a
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 400 }}
					className="w-full btn"
					type="button"
				>
					See My Work
				</motion.a>
			</Link>
			<Link href="/contact" passHref>
				<motion.a
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 500 }}
					className="w-full btn btn-primary"
					type="botton"
				>
					Hire Me
				</motion.a>
			</Link>
		</div>
	</motion.div>
);

export default IntroductionDescription;
