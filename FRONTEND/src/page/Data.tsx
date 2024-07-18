import React, { Fragment, Suspense, useEffect, useState } from 'react'
import { distinctValue, searchData } from '../api/services/getAllTheData'
import AreaChartComponents from '../components/AreaChartComponent'
import BarChartComponent from '../components/BarChartComponent'
import LinkChartComponent from '../components/LinkChartComponent'
import FilterDropdown from '../components/FilterDropdown'
import { allTheFilterDistinctDataInterface, setSelectedValueObject, dataSingleObject } from '../interface'

const Data: React.FC = () => {

   const [chart, setChart] = useState<string>("line")
   const [allTheFilterDistinctValue, setAllTheFilterDistinctValues] = useState<allTheFilterDistinctDataInterface>();
   const [getSelectedValueObject, setGetSelectedValueObject] = useState<setSelectedValueObject[]>();
   const [finalChartData, setFinalChartData] = useState<dataSingleObject[]>([])

   // Create a cache to store the distinct values fetched from the API
   const cache = new Map<string, any>();

   // Function to fetch distinct values from the API with caching
   // If the value is already in the cache, return it from the cache
   // Otherwise, fetch the value from the API and store it in the cache for future use
   const distinctValueWithCache = async (key: string): Promise<any> => {
      // Check if the value is already in the cache
      if (cache.has(key)) {
         // If it is, return the value from the cache
         return cache.get(key);
      }
      // If it is not, fetch the value from the API
      const response = await distinctValue(key);
      // Store the fetched value in the cache
      cache.set(key, response.data.data);
      // Return the fetched value
      return response.data.data;
   };

   // Function to fetch distinct values for multiple keys and set them in the state
   const getDistinctValues = async (filterKey: string[]) => {
      console.log("Running getDistinctValues...");
      try {
         // Create an array of promises to fetch distinct values for each key
         const promises = filterKey.map(async (singleKey) => {
            const data = await distinctValueWithCache(singleKey);
            return { [singleKey]: data };
         });

         // Wait for all the promises to resolve and get the results
         const results = await Promise.all(promises);

         // Combine the results into a single object
         const finalObject: allTheFilterDistinctDataInterface = results.reduce((acc, result) => {
            return { ...acc, ...result };
         }, {} as allTheFilterDistinctDataInterface);

         // Set the final object in the state
         setAllTheFilterDistinctValues(finalObject);
      } catch (error) {
         console.error("Oops!! Something went wrong", error);
      }
   };

   // Function to search for data based on selected values and set the final chart data in the state
   const search = async () => {
      // Check if there are any selected values
      if (!getSelectedValueObject) return;
      // Get the first selected value
      const { key, value } = getSelectedValueObject[0];
      // Make a search request with the selected value and set the final chart data in the state
      const response = await searchData({ queryKey: key, queryValue: value });
      setFinalChartData(response.data.data);
   };

   // Effect to fetch distinct values when the component mounts
   useEffect(() => {
      // Array of keys for which to fetch distinct values
      const keysArr = ["end_year", "topic", "source", "country", "pestle", "sector", "intensity", "region"];
      // Fetch distinct values for the keys and set them in the state
      getDistinctValues(keysArr);
   }, [])

   // Effect to search for data when the selected values change
   useEffect(() => {
      // Search for data based on the selected values and set the final chart data in the state
      search();
   }, [getSelectedValueObject])

   document.title = "Data"
   return (
      <Fragment>
         <Suspense fallback={"loading.."}>
            <div className='bg-gray-100 w-full flex flex-col justify-start items-center'>
               <div className="filters w-full h-[10%]  flex flex-wrap justify-around items-center space-x-1">
                  <div className="yearFilter m-1" >
                     <FilterDropdown
                        title='end_year'
                        setSelectedObject={setGetSelectedValueObject}
                        options={allTheFilterDistinctValue?.end_year}
                     />
                  </div>
                  <div className="topicsFilter" >
                     <FilterDropdown
                        title='topic'
                        setSelectedObject={setGetSelectedValueObject}
                        options={allTheFilterDistinctValue?.topic}
                     />
                  </div>
                  <div className="sectorFilter" >
                     <FilterDropdown
                        title='sector'
                        setSelectedObject={setGetSelectedValueObject}
                        options={allTheFilterDistinctValue?.sector}
                     />
                  </div>
                  <div className="regionFilter" >
                     <FilterDropdown
                        title='region'
                        setSelectedObject={setGetSelectedValueObject}
                        options={allTheFilterDistinctValue?.region}
                     />
                  </div>
                  <div className="pestleFilter" >
                     <FilterDropdown
                        title='pestle'
                        setSelectedObject={setGetSelectedValueObject}
                        options={allTheFilterDistinctValue?.pestle}
                     />
                  </div>
                  <div className="sourceFilter" >
                     <FilterDropdown
                        title='source'
                        setSelectedObject={setGetSelectedValueObject}
                        options={allTheFilterDistinctValue?.source}
                     />
                  </div>
                  <div className="countryFilter" >
                     <FilterDropdown
                        title='country'
                        setSelectedObject={setGetSelectedValueObject}
                        options={allTheFilterDistinctValue?.country}
                     />
                  </div>
               </div>
               <div className="graphsAndChartsContainer flex lg:w-[80%] h-[68%] lg:h-[80%] justify-evenly items-center w-full mt-6 ">
                  {chart === "area" && <AreaChartComponents data={finalChartData} />}
                  {chart === "bar" && <BarChartComponent data={finalChartData} />}
                  {chart === "line" && <LinkChartComponent data={finalChartData} />}
               </div>
               <div className='w-full h-[10%]  flex justify-evenly items-center'>
                  <button
                     onClick={() => setChart("area")}
                     className={` text-white p-2 rounded-md font-semibold hover:bg-slate-900 ${chart === "area" ? "bg-slate-900" : "bg-slate-600"} `}>
                     Area Chart
                  </button>
                  <button
                     onClick={() => setChart("bar")}
                     className={` text-white p-2 rounded-md font-semibold hover:bg-slate-900 ${chart === "bar" ? "bg-slate-900" : "bg-slate-600"} `}>
                     Bar Chart
                  </button>
                  <button
                     onClick={() => setChart("line")}
                     className={` text-white p-2 rounded-md font-semibold hover:bg-slate-900 ${chart === "line" ? "bg-slate-900" : "bg-slate-600"}`}>
                     Line Chart
                  </button>
               </div>
            </div>
         </Suspense>
      </Fragment>
   )
}

export default Data