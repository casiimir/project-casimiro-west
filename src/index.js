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
import Hero from "./components/Hero";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Experiences from "./pages/Experiences";

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
        children: [
          {
            path: "/",
            element: <Hero />,
          },
        ],
      },

      { path: "/about", element: <About /> },
      { path: "/activities", element: <Activities /> },
      { path: "/experiences", element: <Experiences /> },
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
