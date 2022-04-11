import React from 'react';

interface PageSectionInterface {
	children: React.ReactNode;
	pageID: string;
	lightMode?: boolean | undefined;
	className?: string[];
}

type PageSectionProps = React.FunctionComponent<PageSectionInterface>;

const PageSection: PageSectionProps = ({ children, pageID, lightMode, className = [] }) => {
	const [class1, class2] = className;
	return (
		<section id={pageID} className={`min-h-screen w-screen ${class1} ${lightMode ? '' : 'dark-section'}`}>
			<div className={`flex h-full w-full justify-center items-center ${class2}`}>{children}</div>
		</section>
	);
};

export default PageSection;
