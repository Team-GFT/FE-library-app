/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

interface DetailBookManageProps {
  book: { name: string; author: string };
  key: number;
}

function DetailBookManage({ book, key }: DetailBookManageProps) {
  const [isHover, SetIsHover] = useState(false);
  const handleHover = () => [SetIsHover((prev) => !prev)];

  return (
    <div css={contentCss} key={key}>
      <div
        css={bookCoverCss}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {isHover && <p>작가 : {book.author}</p>}
      </div>
      <p css={bookTitleCss}>{book.name}</p>
    </div>
  );
}

const contentCss = css`
  display: grid;
  gap: 20px;
`;

const bookCoverCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0e5de;
  height: 300px;

  :hover {
    transition: all 0.3s;
    background: #efe9e6;
  }
`;

const bookTitleCss = css`
  text-align: center;
  font-weight: blod;
`;

export default DetailBookManage;
