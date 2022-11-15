import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import RootLayout from "../components/RootLayout/RootLayout";
import Auth from "../modules/Auth/Auth";
import NotFound from "../NotFound/NotFound";
import UserProtected from "./UserProtected";
import  AddMovie  from "../modules/AddMovie.jsx";

// import Signin from "../modules/Auth/Signin";
// import Signup from "../modules/Auth/Signup/Signup";
// import Movie from "../modules/Movie";
// import Home from "../modules/Home";
// import Checkout from "../modules/Checkout/Checkout";


// Trì hoãn việc tải component cho đến khi nó được gọi
const Signin = lazy(() => import("../modules/Auth/Signin"));
const Signup = lazy(() => import("../modules/Auth/Signup"));
const Home = lazy(() => import("../modules/Home"));
const Movie = lazy(() => import("../modules/Movie"));
const Checkout = lazy(() => import("../modules/Checkout"));

const routes = createBrowserRouter([
    // Move sang project movie-admin
    {path:"/add-movie",element:<AddMovie/>},
    {path: "/", 
    element: <RootLayout/>,
    errorElement:<ErrorBoundary/>,
    children:[
    //Home
    {index:true , element: <Home/> },
    //Movie
    { path: "/movie/:movieId", element: <Movie/>},

    // Checkout
    { path: "/checkout/:checkoutId", element: 
    <UserProtected>
        <Checkout/>
    </UserProtected>},
    //Authentication

    {path: "", 
    element: <Auth />,
    children: [
        {path: "/signin", element: <Signin />},

        {path: "/signup", element: <Signup />},
    ]
}
]},

{path: "*", element: <NotFound/>},
    
])

export default routes