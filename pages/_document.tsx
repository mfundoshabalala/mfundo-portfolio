/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body className="text-gray-800 bg-gray-100">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
