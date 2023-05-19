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
import Test from "./pages/Test.jsx";
import ErrorPage from "./error-page";
import Test2 from './pages/Test2.jsx';
import Test3 from './pages/Test3.jsx';
import TestMain from './pages/TestMain.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Root />}>
      <Route path='' element={<App />} />
      <Route path='games' element={<Game />} />
      <Route path='test' element={<TestMain />}>
        <Route id='1' path='1' element={<Test />} />
        <Route id='2' path='2' element={<Test2 />} />
        <Route id='3' path='3' element={<Test3 />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
