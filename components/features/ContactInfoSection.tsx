import IconComponent from 'components/shared/IconComponent';

const ContactInfoSection: React.FC = () => (
	<section className="flex flex-col justify-between max-w-xl mx-auto space-y-2 sm:space-x-6 sm:flex-row sm:space-y-0 min-w-max">
		<span className="flex flex-row items-center justify-center space-x-2 flex-nowrap">
			<IconComponent icon="email" />
			<a href="" className="hover:underline hover:text-blue-700">
				mfundoshabalala@gmail.com
			</a>
		</span>
		<span className="flex flex-row items-center justify-center space-x-2 flex-nowrap">
			<IconComponent icon="phone" />
			<a href="" className="hover:underline hover:text-blue-700">
				060 484 3666
			</a>
		</span>
	</section>
);

export default ContactInfoSection;
