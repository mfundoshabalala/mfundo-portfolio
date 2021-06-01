import axios from "axios";
import * as _ from "lodash";
import Link from "next/link";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
// import PropTypes from "prop-types";

interface IProject {
  id: number;
  title: string;
  summary: string;
}

interface IPortfolio {
  portfolio: IProject[];
}

// eslint-disable-next-line react/prop-types
const Portfolio: NextPage<IPortfolio> = ({ portfolio }) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="h-full w-full flex flex-col space-y-6">
        <div className="bg-passion bg-clip-padding bg-center bg-cover pb-4 h-3/5 flex justify-center items-center">
          <h1 className="text-5xl font-body font-black uppercase text-center">This is my portfolio page</h1>
        </div>
        <ul className="flex flex-row flex-wrap">
          {_.map(portfolio, project => (
            <li key={project.id}>
              <Link href={`/portfolio/${project.id}`}>
                <a>
                  <img src="https://dummyimage.com/50.png" alt="" />
                  <h1>{project.title}</h1>
                  <p>{project.summary}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Portfolio;

export const getStaticProps = async () => {
  let portfolio = [];

  try {
    const res = await axios(`${process.env.PORTFOLIO_API}`);
    portfolio = await res.data;
  } catch (error) {
    console.error(error);
  }

  return { props: { portfolio }, revalidate: 1 };
};

Portfolio.propTypes = {};
