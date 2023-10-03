import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import User from "./types/User";
import { generateUsers } from "./helpers/userHelper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const UserContext = React.createContext<{ users: User[] }>({
  users: [],
});

root.render(
  <React.StrictMode>
    <UserContext.Provider
      value={{
        users: generateUsers(10),
      }}
    >
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
