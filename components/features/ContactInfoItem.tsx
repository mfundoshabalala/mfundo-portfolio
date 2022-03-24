import IconComponent from 'components/shared/IconComponent';

interface ContactInfoItemProps {
	icon: string;
	text: string;
	opacity?: string;
	href?: string;
	type?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = (props) => {
	const { icon, opacity, text, href } = props;

	return (
		<span className="flex flex-row items-center justify-center space-x-2 flex-nowrap">
			<IconComponent icon={icon} opacity={opacity} />
			<a href={`${type}:${href}`} className="hover:underline hover:text-blue-700" target="_blank" rel="noreferrer">
				{text}
			</a>
		</span>
	);
};

export default ContactInfoItem;
