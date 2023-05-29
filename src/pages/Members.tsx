/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../common/Table";
import { theme } from "../styles/theme";

export type Person = {
  name: string;
  age: number;
  book: number;
};

const defaultData: Person[] = [
  {
    name: "코난",
    age: 24,
    book: 5,
  },
  {
    name: "장미",
    age: 40,
    book: 8,
  },
  {
    name: "아름",
    age: 45,
    book: 1,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "이름",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: () => "나이",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("book", {
    header: () => "대출 중인 권수",
    cell: (info) => info.getValue(),
  }),
];

function Members() {
  return (
    <div css={tableWrapperCss}>
      <Table defaultData={defaultData} columns={columns} />
    </div>
  );
}

const tableWrapperCss = css`
  table {
    border: 1px solid lightgray;
    width: 100%;
  }

  thead {
    background: ${theme.background};
    font-weight: bold;
  }

  th,
  td {
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 20px;
    text-align: left;
  }
`;

export default Members;
