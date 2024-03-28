/* eslint-disable react/prop-types */
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredReadBooks } from '../../utils/localstorage';
import { useLoaderData } from 'react-router-dom';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  const dataIds = getStoredReadBooks();
  const dataLoaded = useLoaderData();
  const data = dataLoaded.filter((data) => dataIds.includes(data.bookId));
  return (
    <div className="bg-base-200 container mx-auto h-[80vh] rounded-2xl overflow-x-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-[500px]">
        <BarChart
          width={1000}
          height={460}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
