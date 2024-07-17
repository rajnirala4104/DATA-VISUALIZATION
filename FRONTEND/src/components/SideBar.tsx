import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar: React.FC = () => {
   const links = [
      {
         name: "Home",
         href: "/"
      },
      {
         name: "Data",
         href: "/data"
      },
   ]

   const { pathname } = useLocation()


   return (
      <div className="lg:flex lg:w-[30%] w-full lg:relative lg:top-0 absolute bottom-0 ">
         <div
            className={`inset-y-0 left-0 w-full absolute bottom-0 z-30 transition-transform transform bg-gray-800 text-white lg:static lg:inset-0 justify-center  items-center`}
         >
            <div className="p-4 bg-slate-700 hidden lg:flex">
               <h2 className="text-2xl text-white text-left  font-semibold ">Sidebar</h2>
            </div>
            <nav className="flex lg:flex-col px-2 
            lg:justify-start lg:items-start justify-center items-center bg-gray-800 space-y-1 h-[6rem] w-full">
               {links.map((link) => (
                  <Link
                     key={link.name}
                     to={link.href}
                     className={`block px-4 py-2  mt-2 text-sm font-medium lg:w-[94%] leading-5 t3ext-white rounded-lg mx-2 ${pathname === link.href ? "bg-gray-700" : ""} hover:bg-gray-700`}
                  >
                     {link.name}
                  </Link>
               ))}
            </nav>
         </div>
      </div>
   );
};

export default SideBar;
