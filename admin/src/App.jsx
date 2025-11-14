import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Hotels from "./pages/Hotels/Hotels"
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single"
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import './styles/global.scss';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {


  const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext); 
   
    if(!user){
      console.log('theres no user')
      return <Navigate to='/login'/>
    }
    return children; 
    
  }
  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
          
        </div> 
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element : (
        <ProtectedRoute> 
          <Layout />
        </ProtectedRoute>
      ) ,
      children : [ {
        path: "/",
        element: 
          <Home />,
      },{
        path: "users",
        element: <Users />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      }, 
      {
        path: "users/:id",
        element: <User/>,
      },
      {
        path: "products/:id",
        element: <Product/>,
      }, ]
    },{
      path : "login" , 
      element : <Login/>
    }
   
  ]);
  
  return (

      <RouterProvider router={router} />
  )
}

export default App

