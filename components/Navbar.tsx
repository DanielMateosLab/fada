import { css, useTheme } from "@emotion/react";
import NavLink from "components/NavLink";
import Container from "components/Container";
import { useRouter } from "next/router";
import MenuButton from "components/MenuButton";
import React, { useEffect, useState } from "react";
import useDeviceType from "utils/useDeviceType";
import { DeviceType } from "models/models.theme";
import Title from "components/Title";
import { Dictionary } from "models/models.gen";
import MainMenu from "components/MainMenu";

const Navbar = () => {
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
  const theme = useTheme();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const deviceType = useDeviceType();

  const handleMenuOpen = () => setMenuOpen((prev) => !prev);
  const IsActiveManager = (href: string) => router.pathname == href;
  const LinksManager = (): React.ReactNode =>
    links.map((linkInfo) => (
      <NavLink
        key={linkInfo.href}
        href={linkInfo.href}
        text={linkInfo.text}
        isActive={IsActiveManager(linkInfo.href)}
      />
    ));
  const MainMenuConfiguration: Dictionary<DeviceType, React.ReactNode> = {
    [DeviceType.Desktop]: <>{LinksManager()}</>,
    [DeviceType.Mobile]: (
      <>
        <Title text="Film Autour De L'art" />
        <MenuButton handleClick={handleMenuOpen} isActive={menuOpen} />
      </>
    ),
  };

  const SecondaryMenu: React.FC = () =>
    menuOpen ? (
      <Container
        css={css`
          margin-top: 0.75rem;
          display: flex;
          flex-direction: column;
          column-gap: 2rem;
          row-gap: 0.5rem;
        `}
      >
        {LinksManager()}
      </Container>
    ) : null;

  useEffect(() => {
    menuOpen && setMenuOpen(false);
  }, [router.pathname]);

  return (
    <nav
      css={css`
        background: ${theme.color.background};
        padding: 1rem 0;
        position: sticky;
        top: 0;
        z-index: 1;
        overflow: hidden;
      `}
    >
      <MainMenu>{MainMenuConfiguration[deviceType]}</MainMenu>
      <SecondaryMenu />
    </nav>
  );
};

export default Navbar;
