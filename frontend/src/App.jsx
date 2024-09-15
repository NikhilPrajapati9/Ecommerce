import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Cart from './features/cart/Cart'
import CheckoutPage from './pages/Checkout'
import ProductDetailPage from './pages/ProductDetailPage'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage'
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
   path: "/login",
   element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SignupPage/>
  },
  {
    path:"/cart",
    element: <CartPage/>
  },
  {
    path:"/checkout",
    element: <CheckoutPage/>
  },
  {
    path:"/product-detail",
    element: <ProductDetailPage/>
  },
]
)



function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
