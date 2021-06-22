import Typed from 'react-typed';
import { FunctionComponent } from 'react';

const TypedText: FunctionComponent = () => (
	<div className="text-center">
		<div className="text-2xl font-black uppercase whitespace-nowrap">
			<p className="">Welcome to the portfolio website of</p>
			<p className="text-blue-600 text-shadow">
				<Typed strings={['Mfundo Bright Shabalala']} typeSpeed={80} backSpeed={50} backDelay={50000} loop />
			</p>
		</div>
	</div>
);

export default TypedText;
