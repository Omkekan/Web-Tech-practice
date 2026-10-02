import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 

import Mylistcom from "../component/Mylistcom";
import GreetingComp from "../component/greetingscomp";

const router = createBrowserRouter([
    { path: "/", element: <App /> }, 
    { path: "/greeting", element: <GreetingComp /> },
    { path: "/list", element: <Mylistcom /> }
]);

export default router;