import React, { useMemo } from "react";
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";

const ProgressChart = ({ data }) => {
  // Calculate Completion Stats
  const completedCount = useMemo(() => data?.topics.filter((d) => d.isCompleted)?.length, [data]);
  const totalTopics = data.totalTopics;
  const completionRate = totalTopics > 0 ? ((completedCount / totalTopics) * 100).toFixed(2) : 0;

  // Data for Completion Chart
  const completionChartData = [
    { name: "Completed", value: completedCount },
    { name: "Pending", value: totalTopics - completedCount },
  ];
  const COMPLETION_COLORS = ["#00C49F", "#FF8042"];

  // Data for Efficiency Chart (Per Topic Completion %)
  const efficiencyChartData = data?.topics.map((topic) => ({
    name: topic.topic,
    completionRate: topic.isCompleted ? 100 : 0, // 100% if completed, else 0%
    notCompleted: 0,
  }));

  return (
    <div className="p-4 shadow-md rounded-lg w-full">
      <h2 className="text-2xl font-semibold mb-4 text-start">{data.topicType}</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Completion Rate - Donut Chart */}
        <div className="flex flex-col items-center p-4 border rounded-lg shadow w-full">
          <h3 className="text-md font-medium mb-3">Completion Rate</h3>
          <div className="w-full flex justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={completionChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius="50%"
                  outerRadius="80%"
                  dataKey="value"
                  label
                >
                  {completionChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COMPLETION_COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-2 font-semibold text-gray-700">
            Completion Rate: <span className="text-blue-600">{completionRate}%</span>
          </p>
        </div>

        {/* Bar Chart - Completion by Topic */}
        <div className="flex flex-col items-center p-4 border rounded-lg shadow w-full">
          <h3 className="text-md font-medium mb-3">Completion by Topic (%)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={efficiencyChartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(tick) => `${tick}%`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#333",  
                  color: "#fff",            
                  borderRadius: "8px",
                  border: "none",
                  padding: "8px",
                  fontSize:"12px"
                }}
                formatter={(value) => `${value}%`}
              />
              <Legend />
              <Bar
                dataKey="completionRate"
                fill="url(#gradientCompleted)"
                name="Completed"
                stackId="a"
                barSize={40}
                radius={[10, 10, 0, 0]} 
              />
              <Bar
                dataKey="notCompleted"
                fill="url(#gradientNotCompleted)"
                name="Not Completed"
                stackId="a"
                barSize={40}
                radius={[10, 10, 0, 0]} 
              />
              <defs>
                <linearGradient id="gradientCompleted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00C49F" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#00C49F" stopOpacity={0.6} />
                </linearGradient>
                <linearGradient id="gradientNotCompleted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0.6} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;
