import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Pages } from '@/pages/index.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.HOME />,
  },{
    path: "/blog/:id",
    element: <Pages.BLOG_DETAILS />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
