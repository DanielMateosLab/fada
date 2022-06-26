import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  text: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const baseStyle = css`
    white-space: nowrap;
    color: #fff;
    user-select: none;
  `;
  const linkStyle = css`
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  `;
  const activeStyle = css`
    font-weight: bold;
  `;

  const StyleManager = () => [
    baseStyle,
    props.isActive ? activeStyle : linkStyle,
  ];
  const TextManager = () => (props.isActive ? `[ ${props.text} ]` : props.text);
  const Wrapper: React.FC<{ text: string }> = props.isActive
    ? (wrapperProps) => <span css={StyleManager()}>{wrapperProps.text}</span>
    : (wrapperProps) => (
        <Link href={props.href} passHref>
          <a css={StyleManager()}>{wrapperProps.text}</a>
        </Link>
      );

  return <Wrapper text={TextManager()} />;
};

export default NavLink;
