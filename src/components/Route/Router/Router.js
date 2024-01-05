import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home/Home";
import Main from "../../../layout/Main";
import Service from "../../Home/Services/Service";
import Login from "../../Login/Login";
import Blog from "../../Blog/Blog";
import SignUp from "../../signUp/SignUp";
import Reviews from "../../Reviews/Reviews";
import AddServices from "../../Home/Services/AddServices/AddServices";
import PrivateRoute from './../../PrivateRoute/PrivateRoute';
import ServiceDetails from "../../Home/Services/ServiceDetails/ServiceDetails";
import ReviewEdit from "../../Reviews/ReviewEdit/ReviewEdit";

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
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/services/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader:({params})=> fetch(`https://visa-consulting-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/reviews',
                element:<Reviews></Reviews>
            },
            {
                path:'/edit/:id',
                element:<ReviewEdit></ReviewEdit>
            },
            {
                path:'/addService',
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
            }
        ]
    }
])


export default router;