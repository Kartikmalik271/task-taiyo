import React from 'react';
import moment from 'moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import {LINEAPI} from '../../utils/urls'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const fetchCovidData = async () => {
  const response = await fetch(LINEAPI);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log('hey',data)
  return data as CovidData;
};

interface CovidData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Covid Cases',
    },
  },
};

const Linechart: React.FC = () => {
  const { data, isLoading, error } = useQuery<CovidData>('covidData', fetchCovidData);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-600 font-semibold text-xl animate-pulse">Loading...</div>
      </div>
    );
  }
  

  if (error) {
    return <div>Error fetching data</div>;
  }

  // Ensure data is defined before using it
  if (!data) {
    return <div>No data available</div>;
  }

  // Format the data for the chart
  const chartData = {
    labels: Object.keys(data.cases).map((date) => moment(date).format('MMM-YY')),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
      },
      {
        label: 'Deaths',
        data: Object.values(data.deaths),
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Recovered',
        data: Object.values(data.recovered),
        borderColor: 'rgba(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className='container mx-auto p-3 bg-white rounded-lg shadow-lg'>
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">COVID-19 Statistics</h2>
      <Line data={chartData} options={options} />
    </div>

  );
};

export default Linechart;
