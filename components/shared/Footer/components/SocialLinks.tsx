import PropTypes from "prop-types";

type SocialProps = {
  brandName: string;
  brandUrl?: string;
};

const SocialIcon: React.FunctionComponent<SocialProps> = ({ brandName, brandUrl = "" }) => (
  <a className={`overflow-hidden rounded-full --animate ${brandName}`} href={brandUrl} target="_blank" rel="noreferrer">
    <span className="--animate-reverse block h-12 w-12 rounded-full border border-gray-300 dark:border-gray-700 p-3">
      <div className={`block w-full h-full bg-contain bg-center bg-${brandName}`} />
    </span>
  </a>
);

SocialIcon.propTypes = {
  brandName: PropTypes.string.isRequired,
  brandUrl: PropTypes.string,
};

SocialIcon.defaultProps = {
  brandUrl: "",
};

const SocialLinks: React.FunctionComponent = () => (
  <div className="filter drop-shadow-lg space-x-3 flex flex-row">
    <SocialIcon brandName="facebook" brandUrl="https://www.facebook.com" />
    <SocialIcon brandName="twitter" brandUrl="https://www.twitter.com" />
    <SocialIcon brandName="linkedin" brandUrl="https://www.linkedin.com" />
    <SocialIcon brandName="github" brandUrl="https://www.github.com" />
    <SocialIcon brandName="whatsapp" brandUrl="https://www.whatsapp.com" />
  </div>
);

export default SocialLinks;
