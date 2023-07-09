import React from 'react'
import BarChart from '@mui/x-charts'
const barchart = () => {
  return (
    <div>
      <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: ['bar A', 'bar B', 'bar C'],
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: [2, 5, 3],
    },
  ]}
  width={500}
  height={300}
/>
    </div>
  )
}

export default barchart
