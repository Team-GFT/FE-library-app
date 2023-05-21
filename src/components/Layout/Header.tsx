/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Header() {
  return <div css={headerCss}>도서 시스템</div>;
}

const headerCss = css`
  width: 100%;
  height: 80px;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`;

export default Header;
