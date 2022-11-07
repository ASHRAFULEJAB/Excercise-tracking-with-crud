import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Activity from "../pages/Activity/Activity";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/shared/Login/Login";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element:<Home></Home>
        }, {
            path: '/activity',
            element:<Activity></Activity>
        }, {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        }
        
    ]
}])