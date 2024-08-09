import React from "react";
import { AreaChart } from "../components/AreaChart";
import { CandleChart } from "../components/CandleChart";
import { DotChart } from "../components/DotChart";
import { LineChart } from "../components/LineChart";

const Home: React.FC = () => {
   document.title = "Home";

   return (
      <div className="bg-gray-300 w-full flex justify-center lg:h-screen  items-center relative">
         <section className="border border-red-500 w-full h-[90vh] absolute bottom-0 overflow-y-auto">
            <div className="chartContainer">
               <AreaChart />
               <LineChart />
               <DotChart />
               <CandleChart />
            </div>
         </section>
      </div>
   );
};

export default Home;
