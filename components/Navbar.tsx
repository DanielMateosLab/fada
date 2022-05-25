import { css } from "@emotion/react";
import NavLink from "./NavLink";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav
      css={css`
        background: #b2441e;
        padding: 1rem 0;
        color: #fff;
      `}
    >
      <Container
        css={css`
          display: flex;
          column-gap: 2rem;
        `}
      >
        <NavLink href="/">FADA</NavLink>
        <NavLink href="/program">Programme 2022</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Container>
    </nav>
  );
};

export default Navbar;
