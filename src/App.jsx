import React from 'react';
import Register from './components/Register/Register.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Notfound from './components/Notfound/Notfound.jsx';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import StoreContextProvider from './components/Context/Context.jsx';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path:'register', element: <Register/>},
        { path:'login', element: <Login/>},
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
