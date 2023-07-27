// LineChart.tsx
import React, { useEffect, useState } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
  


interface CovidData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

const Linechart: React.FC = () => {
  const [data, setData] = useState<CovidData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
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
    <div >
      <h2>COVID-19 Statistics</h2>
      <div > {/* Set the width and hide horizontal overflow */}
        <div className='overscroll-contain overflow-x-auto'> {/* Set the fixed width and enable horizontal scrolling */}
          <Line data={chartData} options={options} />
        </div>
      </div>    
    </div>
  );
};

export default Linechart;
