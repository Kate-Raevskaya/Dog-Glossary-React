import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
])


const root = ReactDOM.createRoot(
  document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
