import Typed from "react-typed";
import { FunctionComponent } from "react";

const TypedText: FunctionComponent = () => (
	<div className="flex-1 text-center space-y-8 flex flex-col justify-center items-center">
		<h2 className="text-3xl font-black uppercase whitespace-nowrap">
			<p className="">Welcome to the portfolio website of</p>
			<p className="text-purple-600 dark:text-indigo-500">
				<Typed strings={["Mfundo Bright Shabalala"]} typeSpeed={80} backSpeed={50} backDelay={50000} loop />
			</p>
		</h2>
		<div className="w-full text-xl flex flex-row">
			{/* <Typed
				className="flex-1"
				strings={[
					"HTML",
					"CSS",
					"Javascript",
					"ReactJS",
					"NextJS",
					"Python",
					"C++",
					"REST API",
					"SQL",
					"MongoDB",
					"Data Structures",
					"Git",
					"Linux",
					"Google Cloud Platform",
				]}
				typeSpeed={100}
				backSpeed={50}
				backDelay={1000}
				showCursor
				cursorChar="|"
				loop
			/> */}
		</div>
	</div>
);

export default TypedText;
