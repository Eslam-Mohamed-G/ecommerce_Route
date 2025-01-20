import React from 'react';
import Home from './components/Register/Register.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path:'register', element: <Register/>}
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
