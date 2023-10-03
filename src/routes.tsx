import { createBrowserRouter, Link } from "react-router-dom";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Hello world! Navigate to <Link to={"/user"}>User</Link>
      </div>
    ),
  },
  {
    path: "/user",
    children: [
      {
        path: "/user",
        index: true,
        element: <Users />,
      },
      {
        path: ":id",
        element: <UserDetail />,
      },
    ],
  },
]);

export default router;
