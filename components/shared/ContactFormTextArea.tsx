interface FormTextAreaProps {
	name: string;
	id: string;
	placeholder: string;
}

const ContactFormTextArea: React.FC<FormTextAreaProps> = (props) => (
	<div>
		<textarea className="w-full px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm" {...props} />
	</div>
);

export default ContactFormTextArea;
