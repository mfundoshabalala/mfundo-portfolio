import { NextPage } from "next";
import PropTypes from "prop-types";
// page component(s)
import Header from "components/shared/Header";
import Footer from "components/shared/Footer";
// page props interface(s)
import { ChildrenProps } from "shared/interfaces";

const BasicLayout: NextPage<ChildrenProps> = ({ children }) => (
  <div className="h-full flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default BasicLayout;

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
