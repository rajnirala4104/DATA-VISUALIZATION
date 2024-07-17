import React, { Fragment, Suspense } from 'react'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts'
import { dataSingleObject } from '../interface'

interface Props {
   data: dataSingleObject[]
}


const AreaChartComponents: React.FC<Props> = (props) => {
   return (
      <Fragment>
         <Suspense fallback={"loading.."}>
            <ResponsiveContainer width={'100%'} height={"100%"}>
               <AreaChart width={500} height={400} data={props.data} margin={{ right: 30, left: -20 }}>
                  <XAxis dataKey={'region'} />
                  <YAxis />
                  <CartesianGrid strokeDasharray={"5 5"} />
                  <Legend />
                  <Tooltip />
                  <Area type={'monotone'} stackId={"1"} fill='red' dataKey="likelihood" />
                  <Area type={'monotone'} stackId={"1"} fill='green' dataKey="intensity" />
                  <Area type={'monotone'} stackId={"1"} fill='blue' dataKey="relevance" />
                  <Area type={'monotone'} stackId={"1"} fill='yellow' dataKey="country" />
                  <Area type={'monotone'} stackId={"1"} fill='purple' dataKey="topic" />
                  <Area type={'monotone'} stackId={"1"} fill='orange' dataKey="region" />
               </AreaChart>
            </ResponsiveContainer>
         </Suspense>
      </Fragment>
   )
}

export default AreaChartComponents