import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import {RouterProvider, createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import DogsSearching from "./pages/DogsSearching";
import {action as loginAction} from "./pages/Login";
import PrivateRoute from './pages/PrivateRoute';
import Saved from "./pages/Saved";
import {AuthContext} from "./AuthContext";
import {useAuth} from "./useAuth";
import ErrorPage from "./ErrorPage";
import DogImage, {dogsBreedLoader, randomDogLoader} from "./pages/DogImage";
import UnknownBreed from "./pages/UnknownBreed";
import ListOfAllBreeds, {listOfAllBreedsLoader} from "./pages/ListOfAllBreeds";
import ListOfSubBreeds, {listOfSubBreedsLoader} from "./pages/ListOfSubBreeds";
import './index.scss';


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
            errorElement: <ErrorPage />,
            children: [
                {
                    errorElement: <ErrorPage />,
                    children: [
                        {index: true, element: <Navigate to='search' />},
                        {
                            path: 'search',
                            element: <DogsSearching />,
                            children: [
                                {
                                    path: 'dogs/random',
                                    element: <DogImage />,
                                    loader: randomDogLoader,
                                    errorElement: <UnknownBreed />
                                },
                                {
                                    path: 'dogs/:breed?',
                                    element: <DogImage />,
                                    loader: dogsBreedLoader,
                                    errorElement: <UnknownBreed />
                                },
                                {
                                    path: 'dogs/all-breeds',
                                    element: <ListOfAllBreeds />,
                                    loader: listOfAllBreedsLoader
                                },
                                {
                                    path: 'dogs/:breed?/sub-breeds',
                                    element: <ListOfSubBreeds />,
                                    loader: listOfSubBreedsLoader,
                                    errorElement: <UnknownBreed />
                                }
                            ]
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
            ]
        }
    ])


    return (
        <AuthContext.Provider value={auth}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    )
}
