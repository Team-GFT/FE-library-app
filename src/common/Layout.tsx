/** @jsxImportSource @emotion/react */
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Sidebar />
      <div css={contentWrapperCss}>
        <Header />
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
`;

const mainCss = css`
  padding: 40px;
`;

export default Layout;
