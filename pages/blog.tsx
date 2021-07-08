import Head from 'next/head';
import { GetStaticProps } from 'next';
import { FunctionComponent } from 'react';
import map from 'lodash/map';

// components
import BannerLayout from 'components/layout/BannerLayout';

// data import
import data from "data/posts.json";

export const PostCard: FunctionComponent = () => (
	<>
			<li className="">
				<header className="">Header</header>
				<main className="">Main</main>
				<footer className="">Footer</footer>
			</li>
	</>
)

const Blog: FunctionComponent<Posts> = ({ posts }) => (
	<>
		<Head>
			<title>Blog Posts</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<BannerLayout
			title="Blog Posts"
			bgColor="from-green-800 via-green-500 via-green-500 to-green-800"
			summary="This is the place where I share my experiences and expertise. Enjoy."
		>
			<ul className="">
				{map(posts, ({ id, title, summary, image }) => {
					<PostCard key={id} />;
				})}
			</ul>
		</BannerLayout>
	</>
);

export default Blog;

// eslint-disable-next-line arrow-body-style
// export const getStaticProps: GetStaticProps = () => {
// 	return {
// 		props: { posts: data},
// 	};
// };
