import React, { Fragment, Suspense } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'
import { dataSingleObject } from '../interface'

interface Props {
   data: dataSingleObject[]
}


const BarChartComponent: React.FC<Props> = (props) => {

   return (
      <Fragment>
         <Suspense fallback={"loading.."}>
            <ResponsiveContainer width={'100%'} height={"100%"}>
               <BarChart width={500} height={400} data={props.data} margin={{ right: 30, left: -20 }}>
                  <XAxis dataKey={'region'} />
                  <YAxis />
                  <CartesianGrid strokeDasharray={"5 5"} />
                  <Legend />
                  <Tooltip />
                  <Bar type={'monotone'} stackId={"1"} fill='red' dataKey="likelihood" />
                  <Bar type={'monotone'} stackId={"1"} fill='green' dataKey="intensity" />
                  <Bar type={'monotone'} stackId={"1"} fill='blue' dataKey="relevance" />
                  <Bar type={'monotone'} stackId={"1"} fill='yellow' dataKey="country" />
                  <Bar type={'monotone'} stackId={"1"} fill='purple' dataKey="topic" />
                  <Bar type={'monotone'} stackId={"1"} fill='orange' dataKey="region" />
               </BarChart>
            </ResponsiveContainer>
         </Suspense>
      </Fragment>
   )
}

export default BarChartComponent