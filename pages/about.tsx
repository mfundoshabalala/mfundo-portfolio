import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => (
		<>
			<Head>
				<title>About Me</title>
			</Head>
			<div className="flex flex-wrap items-stretch h-full">
				<div className="flex items-center flex-1 bg-image">
					<div className="flex-1 space-y-10 text-center filter drop-shadow-2xl font-body">
						<h1 className="text-6xl font-bold text-">Hello, Welcome</h1>
						<h2 className="text-4xl font-semibold">To my About Me Page</h2>
						<p className="">Feel free to read short description about me.</p>
					</div>
				</div>
				<div className="flex items-center flex-1">
					<div className="flex-1 px-8 space-y-3">
						<p className="first-letter:text-6xl first-letter:font-bold first-letter:float-left">
							My name is Mfundo Bright Shabalala and I am an inexperienced software developer looking for an opportunity
							to be part of a great organization.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad placeat consectetur ipsum quas
							nulla modi nobis tempora facere iste blanditiis consequuntur neque delectus in, ex totam? Aliquid, modi ab?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius blanditiis dolore, alias nisi illo minima
							expedita illum at ex cumque voluptatem obcaecati delectus quas nihil harum reiciendis commodi amet. Beatae
							voluptatibus, sed ratione eveniet cum ipsa. Fugit exercitationem doloribus sit eligendi, labore iusto
							officiis quibusdam sunt qui inventore earum perspiciatis aliquid dicta odit cupiditate beatae dolorem vel
							dolorum totam iure.
						</p>
					</div>
				</div>
			</div>
		</>
	);

export default About;
