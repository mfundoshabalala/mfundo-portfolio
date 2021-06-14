import Head from "next/head";
import Image from "next/image";
//
import TypedText from "components/shared/TypedText";
import { NextPage } from "next";

// TODO: Add a catchy background song on full page load
const Home: NextPage = () => (
	<>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			<title>Home</title>
		</Head>
		<div className="h-full font-body filter drop-shadow-md">
			<div className="h-full flex flex-row-reverse justify-evenly">
				<div className="relative flex-1">
					<Image
						className="object-contain object-bottom"
						src="/images/programmer-animate.svg"
						alt="Picture of the author"
						layout="fill"
					/>
				</div>
				<div className="relative flex-1 flex flex-col">
					<TypedText />
				</div>
			</div>
		</div>
	</>
);

export default Home;
