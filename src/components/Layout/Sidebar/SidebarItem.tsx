/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface SidebarItemProps {
  menu: { name: string; path: string };
}

function SidebarItem({ menu }: SidebarItemProps) {
  return (
    <div css={sidebarItemCss}>
      <p>{menu.name}</p>
    </div>
  );
}

const sidebarItemCss = css`
  display: inline-block;
  text-align: left;
  text-decoration: none;
  color: #000;
`;
export default SidebarItem;
