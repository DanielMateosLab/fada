import { css, useTheme } from "@emotion/react";
import NavLink from "./NavLink";
import Container from "./Container";
import { useRouter } from "next/router";

const Navbar = () => {
  /**
   * Navbar configurations:
   * - desktop:
   *    - All links present in main nav
   *    - Active link highlighted
   *    - Menu button and secondary nav hidden
   *    - Secondary nav hidden
   * - mobile:
   *    - Active link present in main nav, in disabled state.
   *    - Menu button present.
   *    - Secondary nav hidden, shows on menu button click.
   *
   * Components requirements:
   *    - NavLink: disabled state.
   *    - Menu button: onClick event.
   */
  const theme = useTheme();
  const router = useRouter();

  const IsActiveManager = (href: string) => router.pathname == href;

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
        <NavLink href="/" text="FADA" isActive={IsActiveManager("/")} />

        <NavLink
          href="/program"
          text="Programme 6ème"
          isActive={IsActiveManager("/program")}
        />

        <NavLink
          href="/contact"
          text="Contact"
          isActive={IsActiveManager("/contact")}
        />

        <NavLink
          href="/past-editions"
          text="Éditions Passées"
          isActive={IsActiveManager("/past-editions")}
        />
      </Container>
    </nav>
  );
};

export default Navbar;
