import React, { useState, useEffect } from "react";
import axios from "axios";

const AirQuality = ({ city }) => {
  const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        const response = await axios.get(
          `https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${city}&distance=25&API_KEY=39ACF244-2294-440C-B274-361817EA1520`
        );
        setAirQuality(response.data[0]);
      } catch (error) {
        console.error("Error fetching air quality:", error);
      }
    };
    fetchAirQuality();
  }, [city]);

  if (!airQuality) {
    return <div> ... loading air quality ...</div>;
  }
  return (
    <div>
      <h2>Air Quality in {city}</h2>
      <p>Location {airQuality.ReportingArea}</p>
      <p>Air Quality Index(AQI): {airQuality.AQI}</p>
    </div>
  );
};

export default AirQuality