/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
//
import transformText from 'lib/transformText';
import getObjectKeys from 'lib/getObjectKeys';
//
import IconComponent from './shared/IconComponent';

type ProjectListItemProps = React.FunctionComponent<{
	project: GithubRepository;
}>;

const ProjectListItem: ProjectListItemProps = ({ project }) => {
	const transformedText = transformText(project?.name);

	const [repositoryLanguage, setRepositoryLanguage] = useState<string[]>([]);

	const getGithubRepositoryLanguages = useCallback(() => {
		fetch(project.languages_url)
			.catch((error) => console.log(error))
			.then((response) => response?.json() as Promise<Record<string, number>>)
			.then((data) => {
				setRepositoryLanguage(getObjectKeys(data));
			})
			.finally(() => 1);
	}, [project.languages_url]);

	useEffect(() => {
		getGithubRepositoryLanguages();
	}, [getGithubRepositoryLanguages]);

	return (
		<article className="z-30 max-w-sm py-4 bg-opacity-100 border border-gray-700 rounded-md shadow-xl hover:shadow min-w-min bg-slate-900">
			<section className="flex flex-col gap-y-4">
				<header className="flex items-center justify-between h-8 px-6 gap-x-4 whitespace-nowrap">
					<h1 className="text-xl font-extralight tracking-wide w-[265px] overflow-hidden whitespace-nowrap text-ellipsis">
						{transformedText}
					</h1>
					<div className="flex items-center gap-x-3">
						<IconComponent
							size="lg"
							icon={['fab', 'github']}
							href={project.html_url}
						/>
						{project.homepage && (
							<IconComponent
								size="lg"
								icon={['fas', 'house-user']}
								href={`https://${project.homepage}`}
							/>
						)}
					</div>
				</header>
				<main className="">
					<Image
						src="https://source.unsplash.com/collection/928423/480x240"
						width={480}
						height={240}
						alt="..."
					/>
					<p className="px-6 py-2 overflow-hidden font-light leading-5 text-justify text-ellipsis h-28 w-96">
						{project?.description ?? 'No description available'}
					</p>
				</main>
			</section>
			<footer className="px-4">
				<ul className="flex flex-wrap gap-2 mx-auto">
					{repositoryLanguage.map((language) => (
						<li key={language}>
							<span className="inline-block px-2 py-1 text-xs border rounded-full border-slate-600">
								{language}
							</span>
						</li>
					))}
				</ul>
			</footer>
		</article>
	);
};

export default ProjectListItem;
