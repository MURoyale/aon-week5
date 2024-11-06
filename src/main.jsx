import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import PhoneNumberPage from "./PhoneNumberPage/PhoneNumberPage";
import PhoneCode from "./PhoneCode/PhoneCode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Phone Number input",
    element: <PhoneNumberPage />,
  },
  {
    path: "/code number",
    element: <PhoneCode/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
