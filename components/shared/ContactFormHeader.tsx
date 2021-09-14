import IconComponent from './IconComponent';

const ContactFormHeader: React.FC = () => (
	<h3 className="text-4xl font-black tracking-tight text-center uppercase font-firaSans drop-shadow">
		Shoot me a message{' '}
		<span className="inline-block w-8 h-8">
			<IconComponent icon="shoot" />
		</span>
	</h3>
);

export default ContactFormHeader;
