import { css } from "@emotion/react";
import AppLink from "./AppLink";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav
      css={css`
        background: #b2441e;
        padding: 1rem;
        color: #fff;
      `}
    >
      <Container
        css={css`
          display: flex;
          column-gap: 2rem;
        `}
      >
        <AppLink href="/">FADA</AppLink>
        <AppLink href="/program">Programme</AppLink>
        <AppLink href="/access-and-contact">Accès et Contact</AppLink>
      </Container>
    </nav>
  );
};

export default Navbar;
