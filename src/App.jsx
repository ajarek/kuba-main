import { useState } from 'react'
import {} from 'react-router-dom';
import Main from "./Main/Main.jsx"
import Products from './page/Products'
import Product from './page/Product'
import Cart from './page/Cart'
import NotFound from './page/404'
import PayForm from './page/PayForm'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <NotFound />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <NotFound />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <NotFound />,
      },
      {
        path: "/payform",
        element: <PayForm />,
        errorElement: <NotFound />,
      },
    ]
  },
  
]);

function App() {
  return <>
      <RouterProvider router={router} />
    </>
}

export default App
