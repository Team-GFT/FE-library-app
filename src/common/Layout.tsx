/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from "react";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div css={contentWrapperCss}>
        <Sidebar />
        <main css={mainCss}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

const contentWrapperCss = css`
  display: flex;
  height: 100%;
`;

const mainCss = css`
  display: flex;
  flex: 5;
`;

export default Layout;
