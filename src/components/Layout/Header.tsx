/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { theme } from "../../styles/theme";
import Modal from "../../common/Modal";

type pageType = {
  name: string;
  headerButtonText?: string;
  path: string;
  icon: ReactNode;
};

interface HeaderProps {
  pages: {
    name: string;
    headerButtonText?: string;
    path: string;
    icon: ReactNode;
  }[];
}

function Header({ pages }: HeaderProps) {
  const [currentPageInfo, setCurrentPageInfo] = useState<pageType>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const findPath = pages.find((page) => page.path === path);
    if (!findPath) return;

    setCurrentPageInfo(findPath);
  }, [location]);

  return (
    <>
      {currentPageInfo && (
        <header css={headerCss}>
          {currentPageInfo.name}
          <button
            type="button"
            css={bookAddButtonCss}
            onClick={handleModalOpen}
          >
            {currentPageInfo?.headerButtonText}
          </button>
        </header>
      )}
      {isModalOpen && <Modal title={currentPageInfo?.headerButtonText} />}
    </>
  );
}

const headerCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 80px;
  padding: 0 50px;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;

  font-size: 24px;
  font-weight: bold;
`;

const bookAddButtonCss = css`
  border: none;
  background: ${theme.keyColor};
  padding: 13px 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  color: ${theme.background};

  :hover {
    background: ${theme.keyLight};
    cursor: pointer;
  }
`;

export default Header;
