import IconComponent from 'components/shared/IconComponent';

const ContactFormSection: React.FC = () => (
	<section className="flex flex-col justify-center max-w-xl mx-auto space-y-6">
		<h3 className="text-4xl font-black tracking-tight text-center uppercase font-firaSans drop-shadow">
			Shoot me a message{' '}
			<span className="inline-block w-8 h-8">
				<IconComponent icon="shoot" />
			</span>
		</h3>
		<form className="flex flex-col items-stretch justify-around space-y-4">
			<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
				<input
					className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
					type="text"
					name="name"
					id="name"
					placeholder="First Name"
				/>
				<input
					className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
					type="text"
					name="surname"
					id="surname"
					placeholder="Last Name"
				/>
			</div>
			<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
				<input
					className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
					type="text"
					name="organization"
					id="organization"
					placeholder="Organization"
				/>
				<input
					className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
					type="email"
					name="email"
					id="email"
					placeholder="Email Address"
				/>
			</div>
			<div className="">
				<textarea
					className="w-full px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
					name="message"
					id="message"
					placeholder="Leave me a message"
				/>
			</div>
			<div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6">
				<select
					className="flex-1 px-4 py-2 border border-gray-300 rounded shadow-lg focus:shadow-sm"
					name="reason"
					id="reason"
				>
					<option value="">Collaboration</option>
					<option value="">Job Opportunity</option>
					<option value="">Complements</option>
				</select>
				<div className="flex flex-row items-center justify-center flex-1 px-4">
					<button className="w-full btn btn-primary" type="submit">
						Contact Me
					</button>
				</div>
			</div>
		</form>
	</section>
);

export default ContactFormSection;
