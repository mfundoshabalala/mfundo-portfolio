// import IconComponent from 'components/shared/IconComponent';
import ContactInfoItem from './ContactInfoItem';

const ContactInfoSection: React.FC = () => (
	<section className="container flex justify-center max-w-md gap-6 mx-auto text-gray-600">
		<ContactInfoItem text="mfundoshabalala@gmail.com" icon="email" opacity="opacity-60" href="www.google.com" />
		<ContactInfoItem text="060-484-3666" icon="phone" opacity="opacity-90" href="https://www.google.com" />
	</section>
);

export default ContactInfoSection;
