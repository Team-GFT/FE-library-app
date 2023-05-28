/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme";
import { ReactNode } from "react";

interface SidebarItemProps {
  menu: { name: string; path: string; icon: ReactNode };
}

function SidebarItem({ menu }: SidebarItemProps) {
  return (
    <div css={sidebarItemCss}>
      {menu.icon}
      <p>{menu.name}</p>
    </div>
  );
}

const sidebarItemCss = css`
  display: flex;
  text-align: left;
  text-decoration: none;
  color: ${theme.keyColor};
  font-size: 24px;
  font-weight: bold;
  gap: 20px;

  :hover {
    color: ${theme.keyDark};
    cursor: pointer;

    svg > g {
      fill: ${theme.keyDark};
    }
  }
`;
export default SidebarItem;
