import store from "./store";
import { Provider } from "react-redux";
import styles from "./index.module.scss";
import React, { StrictMode } from "react";
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
import ActivityPage from "./pages/ActivityPage";
import Attractions from "./pages/Attractions";
import CartPage from "./pages/CartPage";

import CityActivity from "./components/CityActivity/CityActivity";
import AirActivity from "./components/AirActivity/AirActivity";
import CruiseActivity from "./components/CruiseActivity/CruiseActivity";

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
        children: [],
      },
      { path: "/city/:cityName", element: <Cities /> },
      { path: "/about", element: <About /> },
      {
        path: "/activities",
        element: <Activities />,
        children: [
          {
            path: "",
            element: <Navigate to="cruise" />,
          },
          {
            path: "air",
            element: <AirActivity />,
          },
          {
            path: "cruise",
            element: <CruiseActivity />,
          },
          {
            path: "city",
            element: <CityActivity />,
          },
        ],
      },
      { path: "/activity/:activityName", element: <ActivityPage /> },
      { path: "/ActivityPage", element: <ActivityPage /> },
      { path: "/attractions", element: <Attractions /> },
      { path: "/cart", element: <CartPage /> },
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
