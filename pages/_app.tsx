/* eslint-disable no-console */
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
// global app styles + tailwindcss default styles
import '../styles/globals.css';
// basic site layout component
import BasicLayout from 'components/layout/BasicLayout';
//
function App({ Component, pageProps, router }: AppProps): JSX.Element {
	if (typeof window !== 'undefined') {
		console.log('You are on the browser');
	} else {
		console.log('You are on the server');
	}

	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<BasicLayout>
					<Component {...pageProps} key={router.route} />
				</BasicLayout>
			</AnimatePresence>
		</>
	);
}

export default App;
