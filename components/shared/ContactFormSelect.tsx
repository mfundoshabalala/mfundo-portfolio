import _ from 'lodash';

const selectOptions = [
	{ label: 'Reason for contact', value: '', disable: true, hidden: true, selected: true },
	{ label: 'Collaboration', value: 'collaboration' },
	{ label: 'Job Opportunity', value: 'job opportunity' },
	{ label: 'Complements', value: 'complement' },
];

const ContactFormSelect: React.FC = () => (
	<select className="form-input" name="reason" id="reason">
		{_.map(selectOptions, ({ label, value, ...rest }, index) => (
			<option key={index} value={value} {...rest}>
				{label}
			</option>
		))}
	</select>
);

export default ContactFormSelect;
