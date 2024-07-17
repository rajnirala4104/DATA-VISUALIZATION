import React, { Fragment, Suspense } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { dataSingleObject } from '../interface';

interface Props {
   data: dataSingleObject[]
}

const LinkChartComponent: React.FC<Props> = (props) => {


   return (
      <Fragment>
         <Suspense fallback="loading..">
            <ResponsiveContainer width={'100%'} height={"100%"}>
               <LineChart width={500} height={400} data={props.data} margin={{ right: 30, left: -20 }}>
                  <XAxis dataKey={'end_year'} />
                  <YAxis />
                  <CartesianGrid strokeDasharray={"5 5"} />
                  <Legend />
                  <Tooltip />
                  <Line type={'monotone'} fill='red' dataKey="likelihood" />
                  <Line type={'monotone'} fill='green' dataKey="intensity" />
                  <Line type={'monotone'} fill='blue' dataKey="relevance" />
                  <Line type={'monotone'} fill='yellow' dataKey="country" />
                  <Line type={'monotone'} fill='purple' dataKey="topic" />
                  <Line type={'monotone'} fill='orange' dataKey="region" />
               </LineChart>
            </ResponsiveContainer>
         </Suspense>
      </Fragment >
   )
}

export default LinkChartComponent