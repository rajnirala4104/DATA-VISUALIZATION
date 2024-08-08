import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Root from "../page/Root";

export const _ROUTER = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
]);
