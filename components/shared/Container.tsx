interface ContainerInterface {
	children: React.ReactNode;
	className?: string | undefined;
}

type ContainerProps = React.FunctionComponent<ContainerInterface>;

const Container: ContainerProps = ({ children, className }) => (
	<section className={`container mx-auto ${className ?? ''}`}>
		{children}
	</section>
);

export default Container;
