type BlockQuoteProps = React.FunctionComponent<{
	children: React.ReactNode;
	className?: string | undefined;
	cite?: string;
}>;

const BlockQuote: BlockQuoteProps = ({ children, cite, className }) => (
	<blockquote
		cite={cite}
		className={`max-w-full lg:max-w-md mx-auto capitalize
			text-justify font-thin opacity-50 font-mono ${className ?? ''}`}
	>
		<span>&ldquo;</span>
		{children}
		<span>&ldquo;</span>
	</blockquote>
);

export default BlockQuote;
