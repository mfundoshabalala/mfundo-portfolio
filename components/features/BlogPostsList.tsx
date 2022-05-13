import BlogCard from './BlogCard';

const BlogPostsList: React.FC = () => (
	<section className="container p-6 mx-auto">
		<ul className="flex flex-wrap items-center justify-center gap-6 md:flex-row">
			{[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map((post) => (
				<BlogCard key={post.id} {...post} />
			))}
		</ul>
	</section>
);

export default BlogPostsList;
