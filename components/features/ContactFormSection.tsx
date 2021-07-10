const ContactFormSection: React.FC = () => (
	<section className="flex flex-col justify-center max-w-xl mx-auto space-y-6">
		<h3 className="text-4xl font-black tracking-tight text-center uppercase font-firaSans drop-shadow">
			Shoot me a message{' '}
			<span className="inline-block w-8 h-8">
				<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512" viewBox="0 0 512 512">
					<circle cx="256" cy="256.1" r="251" fill="#e67368" />
					<path fill="#db3328" d="M433.5,78.6l-355,355c98,98,256.9,98,355,0C531.5,335.5,531.5,176.6,433.5,78.6z" />
					<polygon fill="#db3328" points="78.5 78.6 78.5 78.6 78.5 78.6" />
					<path fill="#b5100b" d="M248.4,263.9c1.8,1.9,4.4,3.1,7.3,3.1h251.1c0.3-7,0.3-14,0.1-20H265.3L248.4,263.9z" />
					<circle cx="256" cy="256.1" r="211" fill="#fffcfa" />
					<path
						fill="#ebeadf"
						d="M106.8,405.3c38.2,38.2,90.9,61.8,149.2,61.8c116.5,0,211-94.5,211-211    c0-58.3-23.6-111-61.8-149.2L106.8,405.3z"
					/>
					<path
						fill="#c4c1ab"
						d="M248.4,263.9c1.8,1.9,4.4,3.1,7.3,3.1h211c0.2-4,0.3-7.1,0.3-10.7c0-3.1-0.1-6.3-0.2-9.3    H265.3L248.4,263.9z"
					/>
					<circle cx="256" cy="256.1" r="168" fill="#e67368" />
					<path
						fill="#db3328"
						d="M137.2,374.9c30.4,30.4,72.4,49.2,118.8,49.2c92.8,0,168-75.2,168-168    c0-46.4-18.8-88.4-49.2-118.8L137.2,374.9z"
					/>
					<path
						fill="#b5100b"
						d="M248.4,263.9c1.8,1.9,4.4,3.1,7.3,3.1h167.9c0.2-4,0.3-7.1,0.3-10.7c0-3.1-0.1-6.3-0.3-9.3    H265.3L248.4,263.9z"
					/>
					<circle cx="256" cy="256.1" r="128" fill="#fffcfa" />
					<path
						fill="#ebeadf"
						d="M165.5,346.6c23.2,23.2,55.2,37.5,90.5,37.5c70.7,0,128-57.3,128-128    c0-35.3-14.3-67.3-37.5-90.5L165.5,346.6z"
					/>
					<path
						fill="#c4c1ab"
						d="M248.4,263.9c1.8,1.9,4.4,3.1,7.3,3.1h127.8c0.3-4,0.4-7.1,0.4-10.7c0-3.1-0.1-6.3-0.3-9.3    H265.3L248.4,263.9z"
					/>
					<circle cx="256" cy="256.1" r="74" fill="#e67368" />
					<path
						fill="#db3328"
						d="M203.7,308.4c13.4,13.4,31.9,21.7,52.3,21.7c40.9,0,74-33.1,74-74c0-20.4-8.3-38.9-21.7-52.3    L203.7,308.4z"
					/>
					<path
						fill="#b5100b"
						d="M248.4,263.9c1.8,1.9,4.4,3.1,7.3,3.1h73.5c0.5-4,0.8-7.1,0.8-10.7c0-3.1-0.2-6.3-0.6-9.3    h-64.1L248.4,263.9z"
					/>
					<polygon
						fill="#fffa5a"
						points="256 216.4 268.9 242.5 297.7 246.7 276.8 267 281.8 295.7 256 282.2 230.2 295.7 235.2 267 214.3 246.7 243.1 242.5"
					/>
					<polygon
						fill="#f8d707"
						points="230.2 295.7 256 282.2 281.8 295.7 276.8 267 297.7 246.7 269.5 242.6 233.1 278.9"
					/>
					<path fill="#eda900" d="M255.7,247c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10h21.4l20.5-20H255.7z" />
					<polygon
						fill="#68a1d6"
						points="402.3 5 341.3 66 333.9 134.6 326.6 80.6 297.6 109.6 311.7 200.1 402.3 214.3 458.4 158.1 420.4 138.1 475.4 141.1 506.9 109.6 416.4 95.5"
					/>
					<polygon fill="#3179af" points="416.4 95.5 412.4 69.7 307.7 174.4 311.7 200.2 337.8 204.2 442.5 99.6" />
					<path
						fill="#1f3f77"
						d="M442.9,55L248.9,249c-3.9,3.9-3.9,10.2,0,14.1l0,0c3.9,3.9,10.2,3.9,14.1,0L457,69.2    c3.9-3.9,3.9-10.2,0-14.1v0C453.1,51.1,446.8,51.1,442.9,55z"
					/>
				</svg>
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