import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookManage from "./pages/BookManage";
import Members from "./pages/Members";
import Layout from "./common/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <BookManage /> },
      { path: "/members", element: <Members /> },
      { path: "/hisory" },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
