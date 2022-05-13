interface ContactFormInput {
	id?: string;
	name: string;
	placeholder: string;
	className?: string;
	type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
}

const ContactFormInput: React.FC<ContactFormInput> = (props) => <input {...props} />;

export default ContactFormInput;
