type BlockQuoteProps = React.FunctionComponent<{
	children: React.ReactNode;
	className?: string | undefined;
	cite?: string;
	author?: string;
}>;

const BlockQuote: BlockQuoteProps = ({ children, cite, className, author }) => (
	<figure
		className={`max-w-2xl capitalize text-center font-thin opacity-50 font-mono italic py-4 rounded ${
			className ?? ''
		}`}
	>
		<blockquote cite={cite}>
			<>
				<span className="pr-1">&ldquo;</span>
				{children}
				<span>&rdquo;</span>
			</>
		</blockquote>
		<figcaption className="underline underline-offset-1">-{author}</figcaption>
	</figure>
);

export default BlockQuote;
