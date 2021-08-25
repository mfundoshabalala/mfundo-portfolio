const ContactForm: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<form className="flex flex-col items-stretch justify-around gap-y-4">{children}</form>
);

export default ContactForm;
