import Head from 'next/head';

// components
import BannerLayout from 'components/layout/BannerLayout';
import BlogCard from 'components/features/BlogCard';

const Blog: React.FC<Posts> = () => (
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
			<ul className="py-10 space-y-10">
				{[{ id: 1 }, { id: 2 }, { id: 3 }].map((post) => (
					<BlogCard key={post.id} {...post} />
				))}
			</ul>
		</BannerLayout>
	</>
);

export default Blog;
