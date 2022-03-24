// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body className="text-gray-900 bg-gray-100">
					<Main />
					<div id="modalportal" />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
