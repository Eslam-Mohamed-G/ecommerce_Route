import React from 'react';
import Register from './components/3_Register/Register.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/2_Home/Home.jsx';
import Login from './components/4_Login/Login.jsx';
import Notfound from './components/Notfound/Notfound.jsx';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StoreContextProvider from './components/Context/Context.jsx';
import Cart from './components/5_Cart/Cart.jsx';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path:'register', element: <Register/>},
        { path:'login', element: <Login/>},
        { path:'cart', element: <Cart/>},
        { path:'*', element: <Notfound/>},
      ]
    }
  ])

  return (
    <StoreContextProvider>
      <RouterProvider router={routes} />
    </StoreContextProvider>
  )
}

export default App
