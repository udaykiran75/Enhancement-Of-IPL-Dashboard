import {
  PieChart as PieChartComponent,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

import './index.css'

const COLORS = ['#238823', '#D2222D', '#FFBF00']

const PieChart = props => {
  const {data} = props

  return (
    <div className="pie-chart-bg-container mt-2 d-flex justify-content-center">
      <PieChartComponent width={400} height={350}>
        <Pie
          data={data}
          innerRadius={0}
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map(item => (
            <Cell
              key={`cell-${item.id}`}
              fill={COLORS[item.id % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChartComponent>
    </div>
  )
}

export default PieChart
