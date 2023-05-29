/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { theme } from "../styles/theme";

interface ModalProps {
  title?: string;
}

function Modal({ title }: ModalProps) {
  return (
    <div css={backgroundCss}>
      <div css={modalWrapperCss}>
        <div css={contentHeadCss}>
          <div>{title}</div>
          <button>x</button>
        </div>
      </div>
    </div>
  );
}

const backgroundCss = css`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const modalWrapperCss = css`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 500px;
  height: 200px;
  background-color: ${theme.white};
  padding: 30px;
`;

const contentHeadCss = css`
  display: flex;
  justify-content: space-between;
`;

export default Modal;
