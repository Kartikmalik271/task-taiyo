import React from "react";
import { useQuery } from "react-query";
import { OVERALL_DATA } from '../../utils/urls';

// Interface to define the structure of the overall Covid data
interface AllCovidData {
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
  critical: number;
  tests: number;
}

// Function to fetch overall Covid data from the specified API
const fetchAllCovidData = async () => {
  const response = await fetch(OVERALL_DATA);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const Alldata = await response.json();
  return Alldata;
};

// React functional component to render the overall Covid data
const Overalldata: React.FC = () => {
  // Use the 'useQuery' hook to fetch data and handle loading and error states
  const { data, isLoading, isError } = useQuery<AllCovidData>('AllData', fetchAllCovidData);

  if (isLoading) {
    return (
      // Display a loading message while fetching data
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-600 font-semibold text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return <div>Some Error Occurred</div>;
  }

  // Render the overall Covid data
  return (
    <div className="flex flex-col items-center justify-center pt-12  lg:pt-3 my-10">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">COVID-19 Data</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg font-semibold text-gray-800">Total Cases: {data?.cases}</p>
        <p className="text-lg font-semibold text-gray-800">Total Deaths: {data?.deaths}</p>
        <p className="text-lg font-semibold text-gray-800">Total Recovered: {data?.recovered}</p>
        <p className="text-lg font-semibold text-gray-800">Active Cases: {data?.active}</p>
        <p className="text-lg font-semibold text-gray-800">Critical Cases: {data?.critical}</p>
        <p className="text-lg font-semibold text-gray-800">Total Tests: {data?.tests}</p>
      </div>
    </div>
  );
};

export default Overalldata;
