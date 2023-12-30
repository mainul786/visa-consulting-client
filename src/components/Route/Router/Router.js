import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../../layout/Main";
import Service from "../../Home/Services/Service";
import Login from "../../Login/Login";

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
            }
        ]
    }
])


export default router;