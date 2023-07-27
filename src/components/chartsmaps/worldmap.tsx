// src/Worldmap.tsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
const Worldmap: React.FC = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        const data = await response.json();
        setCountriesData(data);
        console.log(countriesData)
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("countriesData:", countriesData);
  return (
    <div className="overscroll-contain overflow-auto w-full h-full">
    <MapContainer center = { [ 20.593683, 78.962883 ] } zoom = { 3 } scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countriesData.map((country) => (
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
