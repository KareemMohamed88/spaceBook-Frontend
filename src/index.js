import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './pages/register';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>SORROY.........</h1>,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <h1>SORROY.........</h1>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);
