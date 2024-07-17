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

   const getDistinctValues = async (filterKey: string[]) => {
      try {
         let finalObject = Object.create(null);
         for (let i = 0; i < filterKey.length; i++) {
            let singleKey = filterKey[i];
            let response = await distinctValue(singleKey);
            finalObject[singleKey] = response.data.data
         }
         setAllTheFilterDistinctValues(finalObject)
      } catch (error) {
         console.error("Oops!! something went wrong", error)
      }
   }

   const search = async () => {
      try {
         if (!getSelectedValueObject) return
         const searchResponse = await searchData({
            queryKey: getSelectedValueObject[0].key,
            queryValue: getSelectedValueObject[0].value
         });
         console.log(searchResponse.request)
         setFinalChartData(searchResponse.data.data)
      } catch (error) {
         alert("Oops!!")
      }
   }

   useEffect(() => {
      const keysArr = ["end_year", "topic", "source", "country", "pestle", "sector", "intensity", "region"]
      getDistinctValues(keysArr);
   }, [])

   useEffect(() => {
      search()
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