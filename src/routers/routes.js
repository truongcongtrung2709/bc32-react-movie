import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import RootLayout from "../components/RootLayout/RootLayout";
import Auth from "../modules/Auth/Auth";
import Signin from "../modules/Auth/Signin";
import Signup from "../modules/Auth/Signup/Signup";
import Movie from "../modules/Movie";
import Home from "../modules/Home";
import NotFound from "../NotFound/NotFound";

const routes = createBrowserRouter([
    {path: "/", 
    element: <RootLayout/>,
    errorElement:<ErrorBoundary/>,
    children:[
    //Home
    {index:true , element: <Home/> },
    //Movie
    { path: "/movie/:movieId", element: <Movie/>},
    //Authentication

    {path: "", 
    element: <Auth />,
    children: [
        {path: "/login", element: <Signin />},

        {path: "/signup", element: <Signup />},
    ]
}
]},

{path: "*", element: <NotFound/>},
    
])

export default routes