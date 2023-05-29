/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import { ReactNode, useState } from "react";
import { ReactComponent as More } from "/src/assets/More.svg";
import { ReactComponent as Logo } from "/src/assets/Logo.svg";
import { theme } from "../../../styles/theme";

interface SidebarProps {
  pages: { name: string; path: string; icon: ReactNode }[];
}

function Sidebar({ pages }: SidebarProps) {
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
          <Logo />
          {pages.map((page, index) => (
            <Link to={page.path} key={index}>
              <SidebarItem menu={page} />
            </Link>
          ))}
        </>
      ) : (
        <>
          <More />
          <div>
            {pages.map((menu) => (
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
  width: 30px;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  background: ${theme.background};
  transition: all 0.2s;

  &.open_sidebar {
    width: 13rem;
    padding: 8px 50px;
    gap: 2rem;
  }

  &.close_sidebar {
    padding: 30px;

    div {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      gap: 20px;
    }
  }
`;

export default Sidebar;
