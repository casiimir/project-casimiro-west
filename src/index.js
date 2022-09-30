import store from "./store";
import { Provider } from "react-redux";
import styles from "./index.module.scss";
import React, { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import App from "./App";

import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Cities from "./pages/Cities";

import Attractions from "./pages/Attractions";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      { path: "/about", element: <About /> },
      { path: "/activities", element: <Activities /> },
      { path: "/cities", element: <Cities /> },
      { path: "/attractions", element: <Attractions /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
