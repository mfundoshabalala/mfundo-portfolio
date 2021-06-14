import { FunctionComponent } from "react";

export const Circle: FunctionComponent = () => (
	<>
		<div className="" />
	</>
);

export const Triangle: FunctionComponent = () => (
	<>
		<div className="" />
	</>
);

export const SemiCircle: FunctionComponent = () => (
	<>
		<div className="" />
	</>
);

const BackgroundAnimatedIcon: FunctionComponent = () => (
	<>
		<div className="z-0 absolute top-0 bottom-0 left-0 right-0">
			<Circle />
			<Triangle />
			<SemiCircle />
		</div>
	</>
);

export default BackgroundAnimatedIcon;
