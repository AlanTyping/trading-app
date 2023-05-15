import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Chart from './routes/chart/Chart';
import Social from './routes/social/Social';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chart />,
    errorElement: <ErrorPage />,
  },
  {
    path: "social",
    element: <Social />,
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
