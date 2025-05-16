import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "../Presentation/Pages/LoginPage/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Login/>
            }
        ]
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router}/>
);