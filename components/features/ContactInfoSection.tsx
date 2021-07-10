import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/solid';

const ContactInfoSection: React.FC = () => (
	<section className="flex flex-col justify-center mx-auto space-y-2 sm:space-x-6 sm:flex-row sm:space-y-0 min-w-max">
		<span className="">
			<AtSymbolIcon className="inline-block w-6 h-6 mr-4" />
			<a href="" className="hover:underline">
				mfundoshabalala@gmail.com
			</a>
		</span>
		<span className="">
			<PhoneIcon className="inline-block w-6 h-6 mr-4" />
			<a href="" className="hover:underline">
				+27 604 843 666
			</a>
		</span>
	</section>
);

export default ContactInfoSection;
