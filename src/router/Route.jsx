import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Features from "../pages/Features/Features";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PhonesCard from "../components/PhoneCard/PhonesCard";


const siteRoute = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch(`/phones.json`)
            },
            {
                path : '/features',
                element : <Features></Features>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/phones/:id',
                element : <PhonesCard></PhonesCard>,
                loader : () => fetch(`/phones.json`)
            }
        ]
    }
]);

export default siteRoute;