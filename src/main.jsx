import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import App from './App.jsx'
import './index.css'
import Root from "./Layouts/RootLayout.jsx";
import Game from "./pages/Game.jsx";
import ErrorPage from "./error-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Root />}>
      <Route path='' element={<App />} />
      <Route path='games' element={<Game />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
