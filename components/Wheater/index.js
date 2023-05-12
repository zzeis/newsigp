import React, { useEffect, useState } from "react";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.tomorrow.io/v4/weather/realtime?location=iguape&units=metric&apikey=bMxWVIQfeZIP2paNDzmKMoUyBnqPIBm0";
      try {
        const response = await axios.get(url);
        setWeatherData(response.data.data.values);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold">Tempo</h2>

      {weatherData && (
        <div className="p-2">
          <p>Temperatura: {weatherData.temperature}°</p>
          <p>Umidade: {weatherData.humidity}</p>
          <p>Chuva: {weatherData.precipitationProbability}</p>
          <p>Intensidade da Chuva: {weatherData.rainIntensity}</p>

          <p>Velocidade do Vento: {weatherData.windSpeed}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
