/** @jsxImportSource @emotion/react */
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import { ReactComponent as BookList } from "/src/assets/BookList.svg";
import { ReactComponent as Member } from "/src/assets/Member.svg";
import { ReactComponent as History } from "/src/assets/History.svg";

function Layout() {
  const pages = [
    {
      name: "도서 관리",
      headerButtonText: "도서 추가",
      path: "/",
      icon: <BookList />,
    },
    {
      name: "회원 관리",
      headerButtonText: "회원추가",
      path: "/members",
      icon: <Member />,
    },
    { name: "대출 이력", path: "/history", icon: <History /> },
  ];

  return (
    <>
      <Sidebar pages={pages} />
      <div css={contentWrapperCss}>
        <Header pages={pages} />
        <main css={mainCss}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

const contentWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

const mainCss = css`
  padding: 50px;
`;

export default Layout;
