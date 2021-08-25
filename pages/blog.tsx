import Head from 'next/head';
import { NextPage } from 'next';
// components
import BannerLayout from 'components/layout/BannerLayout';
import BlogCard from 'components/features/BlogCard';

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
				<section className="container p-6 mx-auto">
					<ul className="flex flex-wrap items-center justify-center gap-6 md:flex-row">
						{[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map((post) => (
							<BlogCard key={post.id} {...post} />
						))}
					</ul>
				</section>
			</BannerLayout>
		</>
	);
};

export default Blog;
