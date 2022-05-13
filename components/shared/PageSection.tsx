interface PageSectionInterface {
	children: React.ReactNode | React.ReactNode[];
	pageID: string;
	lightSection?: boolean | undefined;
	className?: string[];
}

type PageSectionProps = React.FunctionComponent<PageSectionInterface>;

const PageSection: PageSectionProps = ({
	children,
	pageID,
	lightSection,
	className = [],
}) => {
	const [class1, class2] = className;
	return (
		<section
			id={pageID}
			className={`min-h-screen w-screen relative ${class1 ?? ''} ${
				lightSection ? '' : 'dark-section'
			}`}
		>
			<div
				className={`flex flex-col h-full justify-center items-center ${
					class2 ?? ''
				}`}
			>
				{children}
			</div>
		</section>
	);
};

export default PageSection;
