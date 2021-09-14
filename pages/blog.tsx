import Head from 'next/head';
import { NextPage } from 'next';
// components
import BannerLayout from 'components/layout/BannerLayout';
import BlogPostsList from 'components/features/BlogPostsList';

const Blog: NextPage = () => {
	const pageDetails = {
		title: 'Blog Posts',
		bgColor: 'from-green-800 via-green-500 via-green-500 to-green-800',
		summary: 'This is the place where I share my experiences and expertise. Enjoy.',
	};

	return (
		<>
			<Head>
				<title>Blog Posts</title>
			</Head>
			<BannerLayout {...pageDetails}>
				<BlogPostsList />
			</BannerLayout>
		</>
	);
};

export default Blog;
