import { css } from "@emotion/react";

interface MenuButtonProps {
  isActive: boolean;
  handleClick: () => void;
}
const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const baseStyle = css`
    padding: 2px;
    border: 1px solid transparent;
    background: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  `;
  const activeStyle = css`
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  `;

  const StyleManager = () => [baseStyle, props.isActive && activeStyle];

  return (
    <button css={StyleManager()} onClick={props.handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
