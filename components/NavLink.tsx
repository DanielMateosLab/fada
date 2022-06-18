import { css } from "@emotion/react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLink = ({
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  return (
    <Link {...props} passHref>
      <a
        css={css`
          white-space: nowrap;
          color: #fff;
          text-decoration: none;
          font-weight: ${isActive ? "bold" : "normal"};
          cursor: ${isActive ? "default" : "pointer"};
          &:hover {
            text-decoration: ${isActive ? "none" : "underline"};
          }
        `}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
