import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import PopularProduct from './Pages/Home/HomeComponents/PopularProduct.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import AuthLayout from './Routes/AuthLayout.jsx';
import Login from './Auth/Login.jsx';
import Signup from './Auth/Signup.jsx';
import Blog from './Pages/Blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    children: [
      {index: true,
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/menu",
        element : <PopularProduct></PopularProduct>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      }
    ]
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children : [
      {path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <Signup></Signup>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
