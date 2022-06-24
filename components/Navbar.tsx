import { css, useTheme } from "@emotion/react";
import NavLink from "./NavLink";
import Container from "./Container";

const Navbar = () => {
  const theme = useTheme();

  return (
    <nav
      css={css`
        background: ${theme.color.background};
        padding: 1rem 0;
        color: #fff;
        position: sticky;
        top: 0;
        z-index: 1;
      `}
    >
      <Container
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
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
