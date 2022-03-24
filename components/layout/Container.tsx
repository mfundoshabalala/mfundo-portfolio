const Container: React.FunctionComponent<React.ReactNode> = ({ children }) => (
	<div className="container mx-auto h-full max-h-screen">
		<div className="h-full flex items-center">{children}</div>
	</div>
);

export default Container;
