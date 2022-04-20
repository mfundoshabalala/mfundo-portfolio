/* eslint-disable camelcase */
declare module 'lodash';

interface License {
	key: string;
	name: string;
	spdxID: string;
	url: null | string;
	nodeID: string;
}

interface Owner {
	login: Login;
	id: number;
	nodeID: NodeID;
	avatarURL: string;
	gravatarID: string;
	url: string;
	htmlURL: string;
	followersURL: string;
	followingURL: FollowingURL;
	gistsURL: GistsURL;
	starredURL: StarredURL;
	subscriptionsURL: string;
	organizationsURL: string;
	reposURL: string;
	eventsURL: EventsURL;
	receivedEventsURL: string;
	type: Type;
	siteAdmin: boolean;
}

interface GithubRepository {
	id: number;
	nodeID: string;
	name: string;
	fullName: string;
	private: boolean;
	owner: Owner;
	html_url: string;
	description: null | string;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issueEvents_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	gitTags_url: string;
	gitRefs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	gitCommits_url: string;
	comments_url: string;
	issueComment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	createdAt: Date;
	updatedAt: Date;
	pushedAt: Date;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: null | string;
	size: number;
	stargazersCount: number;
	watchersCount: number;
	language: null | string;
	hasIssues: boolean;
	hasProjects: boolean;
	hasDownloads: boolean;
	hasWiki: boolean;
	hasPages: boolean;
	forksCount: number;
	mirror_url: null;
	archived: boolean;
	disabled: boolean;
	openIssuesCount: number;
	license: License | null;
	forks: number;
	openIssues: number;
	watchers: number;
	defaultBranch: DefaultBranch;
}
