import ContactForm from 'components/shared/ContactForm';
import ContactFormGroup from 'components/shared/ContactFormGroup';
import ContactFormHeader from 'components/shared/ContactFormHeader';
import ContactFormInput from 'components/shared/ContactFormInput';
// import ContactFormSelect from 'components/shared/ContactFormSelect';
import ContactFormTextArea from 'components/shared/ContactFormTextArea';

const ContactFormSection: React.FC = () => (
	<section className="flex flex-col justify-center max-w-xl mx-auto gap-y-6">
		<ContactFormHeader />
		<ContactForm>
			<ContactFormGroup>
				<ContactFormInput className="form-input" name="name" id="name" placeholder="First Name" />
				<ContactFormInput className="form-input" name="surname" id="surname" placeholder="Last Name" />
			</ContactFormGroup>
			<ContactFormGroup>
				<ContactFormInput className="form-input" name="organization" id="organization" placeholder="Organization" />
				<ContactFormInput className="form-input" type="email" name="email" id="email" placeholder="Email Address" />
			</ContactFormGroup>
			<ContactFormTextArea name="message" id="message" placeholder="Leave me a message" />
			<section className="flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row sm:gap-x-6">
				{/* <ContactFormSelect /> */}
				<div className="flex flex-row items-center justify-center flex-1">
					<button className="w-full max-w-xs btn btn-primary" type="submit">
						Contact Me
					</button>
				</div>
			</section>
		</ContactForm>
	</section>
);

export default ContactFormSection;
