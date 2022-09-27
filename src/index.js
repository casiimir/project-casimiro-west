import store from "./store";
import { Provider } from "react-redux";
import "./index.css";
import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [],
    },
  ]

  // { path: "*", element: <ErrorPage /> }
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
