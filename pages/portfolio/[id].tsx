/* eslint-disable react/prop-types */
import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
// import PropTypes from "prop-types";
import _ from "lodash";
import { ParsedUrlQuery } from "querystring";

export interface IProject {
	project: { id: number; title: string; summary: string };
}

const Project: NextPage<IProject> = ({ project }) => (
	<div>
		<h1>{project?.title}</h1>
		<p>{project?.summary}</p>
		<p>{project?.id}</p>
	</div>
);

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
	// Calling an external API endpoint to get the portfolio projects
	const res = await axios(`http://my-json-server.typicode.com/shbmfu003/demo/portfolio`);
	const portfolio = (await res.data) as IProject;

	// Get the paths we want to pre-render based on the portfolio's projects
	//   const paths = portfolio.map((project: { id: { toString: () => string } }) => ({
	//     params: { id: project.id.toString() },
	//   }));

	const paths = _.map(portfolio, project => ({
		params: { id: project.id.toString() },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
	id: string;
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	// Calling an external API endpoint to get a specific portfolio project
	let project = {};
	const { id } = context?.params as IParams;

	try {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		const res = await axios(`http://my-json-server.typicode.com/shbmfu003/demo/portfolio/${id}`);
		project = (await res.data) as IProject;
	} catch (error) {
		console.error(error);
	}

	// We'll pre-render the props at build time.
	return { props: { project } };
};

Project.propTypes = {};
