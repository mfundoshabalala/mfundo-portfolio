interface IBasicLayout {
	children: React.ReactNode;
}

interface IBanner {
	color?: string;
	bgColor?: string;
	title?: string;
	summary?: string;
	quote?: string;
}

interface IBannerLayout extends IBanner {
	children: React.ReactNode;
}

interface IProject {
	id: number;
	title: string;
	summary: string;
}
