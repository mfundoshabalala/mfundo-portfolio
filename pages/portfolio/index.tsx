// import _ from "lodash";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
// components
import BannerLayout from "components/layout/BannerLayout";

// interface Props {
// 	portfolio: IProject[];
// }

const Portfolio: NextPage = () => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>
			<BannerLayout
				summary="Showcasing my careful curated projects that I hope you will enjoy."
				quote="Find out what you like doing best and get someone to pay you for doing it. —Katherine Whitehorn"
				title="Portfolio Page"
				bgColor="bg-teal-500"
				color="text-gray-50"
			>
				<ul className="flex flex-row flex-wrap bg-blue-500 ">
					{/* {_.map(portfolio, project => (
						<li key={project.id}>
							<Link href={`/portfolio/${project.id}`}>
								<a>
									<img src="https://dummyimage.com/50.png" alt="" />
									<h1>{project.title}</h1>
									<p>{project.summary}</p>
								</a>
							</Link>
						</li>
					))} */}
				</ul>
			</BannerLayout>
		</>
	);
};

export default Portfolio;

// export const getStaticProps: GetStaticProps = async () => {
// 	let portfolio = [];

// 	try {
// 		const res = await axios(`${process.env.PORTFOLIO_API}`);
// 		portfolio = await res.data;
// 	} catch (error) {
// 		console.error(error);
// 	}

// 	return { props: { portfolio }, revalidate: 1 };
// };

// Portfolio.propTypes = {};
