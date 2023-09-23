import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Features from "../pages/Features/Features";
import Login from "../pages/Login/Login";


const siteRoute = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/features',
                element : <Features></Features>
            },
            {
                path : '/login',
                element : <Login></Login>
            }
        ]
    }
]);

export default siteRoute;