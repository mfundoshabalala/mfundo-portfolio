/* eslint-disable no-use-before-define */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes, { ReactElementLike } from "prop-types";

type activeLinkProps = {
  href: string;
  activeClassName: string;
  children: ReactElementLike;
};

const ActiveLink = ({ href, activeClassName, children }: activeLinkProps) => {
  const router = useRouter();
  const child = React.Children.only(children);

  let className = child.props.className || "";
  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = {
  href: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};
ActiveLink.defaultProps = {
  href: "",
  activeClassName: "",
};

export default ActiveLink;
