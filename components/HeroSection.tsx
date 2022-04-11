import React from 'react';

const HeroSection: React.FunctionComponent = () => (
	<>
		<div className="flex flex-col gap-2 uppercase select-none drop-shadow">
			<h1 className="text-xl font-light leading-3">Hi I&apos;m</h1>
			<h2 className="text-6xl font-bold tracking-wide">Mfundo Shabalala</h2>
			<h3 className="self-end w-40 text-2xl font-medium leading-5 tracking-wide text-right text-orange-400 whitespace-pre-wrap flex flex-col">
				<span className="">A frontend</span>
				<span className="">developer</span>
			</h3>
			<h4 className="mt-6 text-center normal-case text-xl font-thin opacity-80">
				I help build user-friendly and accessible websites.
			</h4>
		</div>
	</>
);

export default HeroSection;
