import { css } from "@emotion/react";
import { DeviceType } from "models/models.theme";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useDeviceType from "utils/useDeviceType";

interface NavLinkProps {
  href: string;
  text: string;
  isActive: boolean;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <Link href={props.href} passHref>
      <a
        css={css`
          white-space: nowrap;
          color: #fff;
          text-decoration: none;
          font-weight: ${props.isActive ? "bold" : "normal"};
          cursor: ${props.isActive ? "default" : "pointer"};
          &:hover {
            text-decoration: ${props.isActive ? "none" : "underline"};
          }
        `}
      >
        {props.text}
      </a>
    </Link>
  );
};

export default NavLink;
