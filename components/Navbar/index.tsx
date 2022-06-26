import { css, useTheme } from "@emotion/react";
import NavLink from "components/NavLink";
import Container from "components/Container";
import { useRouter } from "next/router";
import MenuButton from "components/MenuButton";
import { useState } from "react";

const Navbar = () => {
  /**
   * Navbar configurations:
   * - desktop:
   *    - All links present in main nav
   *    - Active link highlighted
   *    - Menu button and secondary nav hidden
   *    - Secondary nav hidden
   * - mobile:
   *    - Active link text in main nav.
   *    - Menu button present.
   *    - Secondary nav hidden, shows on menu button click.
   *
   * Components requirements:
   *    - NavLink: disabled state.
   *    - Menu button: onClick event.
   */
  const theme = useTheme();
  const router = useRouter();
  const links = [
    {
      href: "/",
      text: "FADA",
    },
    {
      href: "/program",
      text: "Programme 6ème",
    },
    {
      href: "/contact",
      text: "Contact",
    },
    {
      href: "/past-editions",
      text: "Éditions Passées",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const IsActiveManager = (href: string) => router.pathname == href;
  const handleMenuOpen = () => setMenuOpen((prev) => !prev);

  return (
    <nav
      css={css`
        background: ${theme.color.background};
        padding: 1rem 0;
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
        <MenuButton handleClick={handleMenuOpen} isActive={menuOpen} />
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
