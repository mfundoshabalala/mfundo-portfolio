const ContactFormGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">{children}</div>
);

export default ContactFormGroup;
