import { Key } from 'react';

type ProjectsListProps = React.FunctionComponent<{
	items: {
		id: string;
		title: string;
		description: string;
		link: string;
		image: string;
		key: Key;
	}[];
	resourceName: string;
	itemComponent: React.ComponentType;
}>;

const ProjectsList: ProjectsListProps = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => (
	<>
		{items &&
			items?.map((item) => (
				<ItemComponent key={item.id} {...{ [resourceName]: item }} />
			))}
	</>
);

export default ProjectsList;
