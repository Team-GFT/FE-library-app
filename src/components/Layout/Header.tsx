/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as Logo } from "/src/assets/Logo.svg";

function Header() {
  return (
    <header css={headerCss}>
      <Logo />
    </header>
  );
}

const headerCss = css`
  width: 100%;
  height: 80px;
  padding: 0 40px;
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`;

export default Header;
