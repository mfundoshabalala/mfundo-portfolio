import PropTypes from 'prop-types';
import classNames from 'classnames';

const Banner: React.FC<IBanner> = ({ bgColor, title, summary }) => (
	<div className="text-white bg-gray-900 rellax py-14 shadow-custom">
		<div className="container flex flex-col items-center justify-center h-full mx-auto tracking-wide text-center">
			<div className={classNames(bgColor, 'bg-gradient-to-r bg-clip-text space-y-2')}>
				<h1 className="text-5xl font-extrabold text-transparent font-firaSans">{title}</h1>
				<h2 className="text-lg font-light opacity-80">{summary}</h2>
			</div>
		</div>
	</div>
);

export default Banner;

Banner.propTypes = {
	bgColor: PropTypes.string,
	title: PropTypes.string,
	summary: PropTypes.string,
};

Banner.defaultProps = {
	bgColor: 'bg-blue-600',
	title: '',
	summary: '',
};
