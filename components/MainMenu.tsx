import { css } from "@emotion/react";
import Container from "./Container";

interface MainMenuProps {
  children: React.ReactNode;
}
const MainMenu: React.FC<MainMenuProps> = ({ children }) => (
  <Container
    css={css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 2rem;
    `}
  >
    {children}
  </Container>
);

export default MainMenu;
