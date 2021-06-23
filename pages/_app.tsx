/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
// basic site layout component
import BasicLayout from 'components/layout/BasicLayout';
// global app styles + tailwindcss default styles
import '../styles/global.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
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

export default MyApp;
