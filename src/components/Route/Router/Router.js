import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../../layout/Main";
import Service from "../../Home/Services/Service";
import Login from "../../Login/Login";
import Blog from "../../Blog/Blog";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/service',
                element:<Service></Service>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])


export default router;