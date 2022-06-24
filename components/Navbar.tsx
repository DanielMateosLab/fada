import { css, useTheme } from "@emotion/react";
import NavLink from "./NavLink";
import Container from "./Container";
import useDeviceType from "utils/useDeviceType";
import { useRouter } from "next/router";
import { DeviceType } from "models/models.theme";

const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
  const deviceType = useDeviceType();

  const IsActiveManager = (href: string) => router.pathname == href;
  const TextManager = (linkInfo: { text: string; href: string }) =>
    IsActiveManager(linkInfo.href) && deviceType == DeviceType.Desktop
      ? `[ ${linkInfo.text} ]`
      : linkInfo.text;

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
        <NavLink
          href="/"
          text={TextManager({ text: "FADA", href: "/" })}
          isActive={IsActiveManager("/")}
        />

        <NavLink
          href="/program"
          text={TextManager({
            text: "Programme 6ème",
            href: "/program",
          })}
          isActive={IsActiveManager("/program")}
        />

        <NavLink
          href="/contact"
          text={TextManager({ text: "Contact", href: "/contact" })}
          isActive={IsActiveManager("/contact")}
        />

        <NavLink
          href="/past-editions"
          text={TextManager({
            text: "Éditions Passées",
            href: "/past-editions",
          })}
          isActive={IsActiveManager("/past-editions")}
        />
      </Container>
    </nav>
  );
};

export default Navbar;
