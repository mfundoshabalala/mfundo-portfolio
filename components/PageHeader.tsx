import React from 'react';

const PageHeader: React.FunctionComponent<{ pageTitle: string }> = ({
	pageTitle,
}) => (
	<div>
		<h1 className="w-full py-10 text-5xl font-black tracking-wide text-center uppercase">
			<div className="bg-clip-text bg-gradient-to-r from-orange-800 via-orange-500 to-orange-800">
				<span className="text-transparent">{pageTitle}</span>
			</div>
		</h1>
	</div>
);

export default PageHeader;
