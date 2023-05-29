/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import DetailBookManage from "../components/BookManager/DetailBookManage";

const books = [
  { name: "A", author: "aa" },
  { name: "B", author: "bb" },
  { name: "C", author: "cc" },
  { name: "D", author: "dd" },
  { name: "E", author: "ee" },
  { name: "F", author: "ff" },
  { name: "G", author: "gg" },
  { name: "H", author: "hh" },
  { name: "J", author: "jj" },
  { name: "K", author: "kk" },
];

function BookManage() {
  return (
    <div css={wrapperCss}>
      {books.map((book, index) => (
        <DetailBookManage book={book} key={index} />
      ))}
    </div>
  );
}

const wrapperCss = css`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(5, 1fr);
`;

export default BookManage;
