import Home from '../src/pages/Home/home';
import Users from './pages/users/users';
import Products from './pages/products/products';

import './styles/global.scss';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import User from './pages/User/User';

const Layout = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='container'>
        <div className='menuContainer'>
          <Menu />
        </div>
        <div className='contentContainer'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/users",
        element: <Users />
      },
      {
        path: "/users/:id",
        element: <User />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/products/:id",
        element: <Product />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
