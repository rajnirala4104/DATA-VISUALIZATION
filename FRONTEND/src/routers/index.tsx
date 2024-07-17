import { createBrowserRouter } from "react-router-dom";
import Root from "../page/Root";
import Home from "../page/Home";
import Data from "../page/Data";

export const _ROUTER = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: "/data",
            element: <Data />
         }
      ]
   }
])