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
		<article className="max-w-sm border py-4 rounded-md border-gray-700 shadow-xl hover:shadow min-w-min bg-slate-900 bg-opacity-100 z-30">
			<section className="flex flex-col gap-y-4">
				<header className="flex justify-between gap-x-4 items-center px-6 h-8 whitespace-nowrap">
					<h1 className="text-xl font-extralight tracking-wide w-[265px] overflow-hidden whitespace-nowrap text-ellipsis">
						{transformedText}
					</h1>
					<div className="flex gap-x-3 items-center">
						<IconComponent
							size="lg"
							icon={['fab', 'github']}
							href={project.html_url}
						/>
						<IconComponent
							size="lg"
							icon={['fas', 'house-user']}
							href={project.homepage ?? undefined}
						/>
					</div>
				</header>
				<main className="">
					<Image
						src="https://source.unsplash.com/collection/928423/480x240"
						width={480}
						height={240}
						alt="..."
					/>
					<p className="text-ellipsis text-justify px-6 py-2 font-light leading-5 h-28 overflow-hidden w-96">
						{project?.description ?? 'No description available'}
					</p>
				</main>
			</section>
			<footer className="px-4">
				<ul className="flex gap-2 flex-wrap mx-auto">
					{repositoryLanguage.map((language) => (
						<li key={language}>
							<span className="inline-block border border-slate-600 px-2 py-1 text-xs rounded-full">
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
