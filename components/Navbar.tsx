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
          align-items: center;
          column-gap: 2rem;
          overflow-x: scroll;
          scrollbar-width: none;
          &::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        <NavLink href="/">FADA</NavLink>
        <NavLink href="/program">Programme 6ème</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/past-editions">Éditions Passées</NavLink>
      </Container>
    </nav>
  );
};

export default Navbar;
