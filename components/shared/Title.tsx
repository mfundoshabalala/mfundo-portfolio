import React from 'react';

type TitleProps = React.FunctionComponent<{
	children?: React.ReactNode[] | React.ReactNode;
}>;

const Title: TitleProps = ({ children }) => (
	// const { salutation, name, stream } = children;

	<>
		<h1 className="text-xl font-light leading-3 capitalize">Hi I&apos;m</h1>
		<h2 className="text-6xl font-bold tracking-wide">Mfundo Shabalala</h2>
		<h3
			className="self-end w-40 text-2xl font-medium leading-5 tracking-wide
		text-right text-orange-400 whitespace-pre-wrap flex flex-col"
		>
			<span className="">A frontend</span>
			<span className="">developer</span>
		</h3>
	</>
);
export default Title;
