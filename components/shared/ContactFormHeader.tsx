import IconComponent from './IconComponent';

const ContactFormHeader: React.FC = () => (
	<h3 className="flex justify-center w-full text-4xl font-black tracking-tight text-center uppercase gap-x-4 font-firaSans drop-shadow flex-nowrap">
		Shoot me a message
		<span className="inline-block w-8 h-8">
			<IconComponent icon="target" width="w-10" height="h-10" />
		</span>
	</h3>
);

export default ContactFormHeader;
