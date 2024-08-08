import React from "react";

const Home: React.FC = () => {
   document.title = "Home";

   return (
      <div className="bg-gray-300 w-full flex justify-center lg:h-screen  items-center">
         Dashboard
      </div>
   );
};

export default Home;
