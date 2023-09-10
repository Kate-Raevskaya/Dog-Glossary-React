import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import DogsSearching from "./pages/DogsSearching";
import {action as loginAction} from "./pages/Login";
import PrivateRoute from './pages/PrivateRoute';
import Saved from "./pages/Saved";
import {AuthContext} from "./AuthContext";
import {useAuth} from "./useAuth";


const root = ReactDOM.createRoot(
  document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Main />
  </React.StrictMode>
);

function Main() {
    let auth = useAuth()

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <DogsSearching />
                },
                {
                    path: 'login',
                    element: <Login />,
                    action: loginAction(auth)
                },
                {
                    path: 'saved',
                    element: <PrivateRoute><Saved/></PrivateRoute>
                }
            ]
        }
    ])


    return (
        <AuthContext.Provider value={auth}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}
