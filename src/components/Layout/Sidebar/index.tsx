/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const Menus = [
    { name: "도서 목록", path: "/" },
    { name: "회원 관리", path: "/members" },
    { name: "대출 이력", path: "/history" },
  ];

  return (
    <div css={sidebarCss}>
      {Menus.map((menu, index) => (
        <Link to={menu.path} key={index}>
          <SidebarItem menu={menu} />
        </Link>
      ))}
    </div>
  );
}

const sidebarCss = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  width: 100px;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`;

export default Sidebar;
