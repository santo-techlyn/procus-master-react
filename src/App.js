
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home';
import About from './Pages/About';
import Home_2 from "./Pages/Home_2";
import Home_3 from "./Pages/Home_3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  },
  {
    path: '/home_2',
    element: <Home_2></Home_2>
  },
  {
    path: '/home_3',
    element: <Home_3></Home_3>
  }
]);
