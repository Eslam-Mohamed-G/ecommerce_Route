import React from 'react';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const routes = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[{
      index:true, element:<Home/>
    }]}
  ])

  return (
    <RouterProvider router = {routes}/>
  )
}

export default App
