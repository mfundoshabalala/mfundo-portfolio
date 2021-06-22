import Head from 'next/head';
import { FunctionComponent } from 'react';
// components
import BannerLayout from 'components/layout/BannerLayout';

const Blog: FunctionComponent = () => (
	<>
		<Head>
			<title>Blog Posts</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<BannerLayout
			summary="This is the place where I share my experiences and expertise. Enjoy."
			color="text-gray-50"
			bgColor="bg-green-500"
			title="Blog Posts"
		>
			<p>Blog posts</p>
		</BannerLayout>
	</>
);

export default Blog;
