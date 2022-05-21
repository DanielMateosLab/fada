import { css } from "@emotion/react";
import AppLink from "./AppLink";

const Navbar = () => {
  return (
    <nav
      css={css`
        background: #b2441e;
        padding: 1rem;
        color: #fff;
        display: flex;
        justify-content: center;
        column-gap: 2rem;
      `}
    >
      <AppLink href="/">FADA</AppLink>
      <AppLink href="/program">Programme</AppLink>
      <AppLink href="/access-and-contact">Accès et Contact</AppLink>
    </nav>
  );
};

export default Navbar;
