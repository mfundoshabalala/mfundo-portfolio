// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	override render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
				</Head>
				<body className="text-gray-900 bg-gray-100 overflow-x-hidden">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
