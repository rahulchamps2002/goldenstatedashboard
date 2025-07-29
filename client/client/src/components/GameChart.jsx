import React from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

function GameChart({ games, chartType, setChartType }) {
  const chartData = games
    .filter(
      (game) =>
        game.intHomeScore !== null &&
        game.intAwayScore !== null &&
        game.intHomeScore !== '' &&
        game.intAwayScore !== ''
    )
    .slice(0, 5)
    .reverse()
    .map((game) => ({
      name: game.strEvent,
      Warriors: parseInt(
        game.intHomeTeam === 'Golden State Warriors'
          ? game.intHomeScore
          : game.intAwayScore
      ),
      Opponent: parseInt(
        game.intHomeTeam !== 'Golden State Warriors'
          ? game.intHomeScore
          : game.intAwayScore
      )
    }))

  return (
    <section className="game-chart">
      <h2>Game Results Chart</h2>
      <label htmlFor="chartType">Chart Type:</label>
      <select
        id="chartType"
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
      >
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
      </select>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === 'line' ? (
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Warriors"
              stroke="#1d428a"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Opponent"
              stroke="#ffc72c"
              strokeWidth={2}
            />
          </LineChart>
        ) : (
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Warriors" fill="#1d428a" />
            <Bar dataKey="Opponent" fill="#ffc72c" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </section>
  )
}

export default GameChart
