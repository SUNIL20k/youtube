import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Body from './body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Video from './video';
import { Router } from 'react-router-dom';


const App=()=>{
  return <div className='Container'>
       <Navbar/>
       <Outlet/>
  </div>
}


const ways=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/video/:id",
        element:<Video/>
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways}/>);
