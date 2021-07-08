/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AnimatePresence } from 'framer-motion';
// global app styles + tailwindcss default styles
import '../styles/global.css';
// basic site layout component
import BasicLayout from 'components/layout/BasicLayout';

function App({ Component, pageProps, router }: AppProps): JSX.Element {
	return (
		<UserProvider>
			<AnimatePresence exitBeforeEnter>
				<BasicLayout>
					<Component {...pageProps} key={router.route} />
				</BasicLayout>
			</AnimatePresence>
		</UserProvider>
	);
}

export default App;
