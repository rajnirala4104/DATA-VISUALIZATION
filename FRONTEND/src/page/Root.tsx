import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Root: React.FC = () => {
   return (
      <>
         <div className="flex  w-full h-screen">
            <Sidebar />
            <Outlet />
         </div>
      </>
   );
};

export default Root;
