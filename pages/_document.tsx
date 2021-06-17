/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body className="bg-gray-100 text-gray-800">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
