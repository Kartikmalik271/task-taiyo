import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import { WORLD_COUNTRYWISEAPI } from '../../utils/urls';

// Interface to define the structure of country data received from the API
interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    // Add other properties if required from the API response.
  };
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
  // Add other properties if required from the API response.
}

// Function to fetch countries data from the specified API
const fetchCountriesData = async () => {
  const response = await fetch(WORLD_COUNTRYWISEAPI);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data as CountryData[];
};

// React functional component to render the world map with COVID-19 data
const Worldmap: React.FC = () => {
  // Use the 'useQuery' hook to fetch data and handle loading and error states
  const { data: countriesData, isLoading, error } = useQuery<CountryData[]>('countriesData', fetchCountriesData);

  if (isLoading) {
    return (
      // Display a loading message while fetching data
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-600 font-semibold text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div>Some Error Occurred</div>;
  }

  // Render the world map with COVID-19 data
  return (
    <div className="overscroll-contain container w-full h-full mx-auto rounded-lg shadow-lg my-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg p-4">
        <h2 className="text-2xl font-bold">COVID-19 Map</h2>
        <p className="text-lg">Visualizing COVID-19 data on the map</p>
      </div>
      <MapContainer center={[20.593683, 78.962883]} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countriesData?.map((country) => (
          // Create a Marker for each country on the map
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Total Cases: {country.cases}</p>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recovered: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Worldmap;
