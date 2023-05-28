/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import { ReactComponent as More } from "/src/assets/More.svg";
import { ReactComponent as BookList } from "/src/assets/BookList.svg";
import { ReactComponent as Member } from "/src/assets/Member.svg";
import { ReactComponent as History } from "/src/assets/History.svg";

function Sidebar() {
  const Menus = [
    { name: "도서 목록", path: "/", icon: <BookList /> },
    { name: "회원 관리", path: "/members", icon: <Member /> },
    { name: "대출 이력", path: "/history", icon: <History /> },
  ];
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };

  return (
    <nav
      css={sidebarCss}
      className={isOpenSidebar ? "open_sidebar" : "close_sidebar"}
      onMouseEnter={handleSidebar}
      onMouseLeave={handleSidebar}
    >
      {isOpenSidebar ? (
        <>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <SidebarItem menu={menu} />
            </Link>
          ))}
        </>
      ) : (
        <>
          <More />
          <div>
            {Menus.map((menu) => (
              <>{menu.icon}</>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}

const sidebarCss = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30px;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  transition: all 0.2s;

  &.open_sidebar {
    width: 13rem;
    padding: 85px 50px;
    gap: 2rem;
  }

  &.close_sidebar {
    padding: 30px;

    div {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      gap: 20px;
    }
  }
`;

export default Sidebar;
