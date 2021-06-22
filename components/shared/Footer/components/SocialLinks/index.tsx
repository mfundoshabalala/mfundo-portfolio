import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FunctionComponent } from 'react';
// component(s)
import AddTitleComponent from '../AddTitleComponent';

const SocialIcon: FunctionComponent<ISocialIcon> = ({ brandName, brandUrl = '' }) => (
	<a
		className={`bg-gray-100 bg-clip-content overflow-hidden rounded-full --animate ${brandName}`}
		href={brandUrl}
		target="_blank"
		rel="noreferrer"
	>
		<span className="block w-12 h-12 p-3 border border-gray-300 rounded-full --animate-reverse">
			<div
				className="block w-full h-full bg-center bg-contain"
				style={{ backgroundImage: `url(/images/${brandName}.svg)` }}
			/>
		</span>
	</a>
);

SocialIcon.propTypes = {
	brandName: PropTypes.string.isRequired,
	brandUrl: PropTypes.string,
};

SocialIcon.defaultProps = {
	brandUrl: '',
};

const SocialLinks: FunctionComponent<ITitledComponent> = ({ className, title }) => (
	<AddTitleComponent title={title}>
		<div className={classnames(className, 'filter drop-shadow-lg space-x-3 flex flex-row')}>
			<SocialIcon brandName="facebook" brandUrl="https://www.facebook.com" />
			<SocialIcon brandName="twitter" brandUrl="https://www.twitter.com" />
			<SocialIcon brandName="linkedin" brandUrl="https://www.linkedin.com" />
			<SocialIcon brandName="github" brandUrl="https://www.github.com" />
			<SocialIcon brandName="whatsapp" brandUrl="https://www.whatsapp.com" />
		</div>
	</AddTitleComponent>
);

export default SocialLinks;

SocialLinks.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
};

SocialLinks.defaultProps = {
	title: '',
	className: '',
};
