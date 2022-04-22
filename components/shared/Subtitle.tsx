type SubtitleProps = React.FunctionComponent<{
	subtitle: string;
}>;

const Subtitle: SubtitleProps = ({ subtitle = '' }) => (
	<h4 className="mt-6 text-center normal-case text-xl font-light opacity-80">
		{subtitle}
	</h4>
);

export default Subtitle;
