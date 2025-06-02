'use client';

import { useState, useEffect } from 'react';

interface WeatherForecast {
  date: string;
  forecast: string;
  temperature: {
    high: number;
    low: number;
  };
  relative_humidity: {
    high: number;
    low: number;
  };
  wind: {
    speed: {
      high: number;
      low: number;
    };
    direction: string;
  };
}

interface WeatherData {
  forecast: Array<WeatherForecast>;
}

export default function WeatherForecast() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        // Format today's date as YYYY-MM-DD
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        
        const response = await fetch(
          `https://api-open.data.gov.sg/v2/real-time/api/four-day-outlook?date=${formattedDate}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    }

    fetchWeatherData();

    // Refresh weather data every 30 minutes
    const interval = setInterval(fetchWeatherData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="text-center p-4">
        <i className="fas fa-spinner fa-spin text-ocean-blue text-2xl"></i>
        <p className="text-gray-600 mt-2">Loading weather forecast...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        <i className="fas fa-exclamation-circle mr-2"></i>
        {error}
      </div>
    );
  }

  if (!weatherData?.forecast || weatherData.forecast.length === 0) {
    return (
      <div className="text-center p-4 text-gray-600">
        No weather data available
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {weatherData.forecast.map((day, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="text-lg font-semibold mb-3 text-navy">
            {new Date(day.date).toLocaleDateString('en-SG', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            })}
          </div>
          
          <div className="text-3xl mb-4">
            {getWeatherIcon(day.forecast)}
          </div>

          <div className="text-sm text-gray-600 mb-3">
            {day.forecast}
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-500">Temp</div>
              <div className="text-ocean-blue font-medium">
                {day.temperature.low}°C - {day.temperature.high}°C
              </div>
            </div>

            <div className="bg-gray-50 p-2 rounded">
              <div className="text-gray-500">Humidity</div>
              <div className="text-ocean-blue font-medium">
                {day.relative_humidity.low}% - {day.relative_humidity.high}%
              </div>
            </div>

            <div className="bg-gray-50 p-2 rounded col-span-2">
              <div className="text-gray-500">Wind</div>
              <div className="text-ocean-blue font-medium">
                {day.wind.speed.low} - {day.wind.speed.high} km/h {day.wind.direction}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function getWeatherIcon(forecast: string) {
  const lowerForecast = forecast.toLowerCase();
  
  if (lowerForecast.includes('thundery')) {
    return <i className="fas fa-bolt text-yellow-500"></i>;
  } else if (lowerForecast.includes('rain') || lowerForecast.includes('showers')) {
    return <i className="fas fa-cloud-rain text-blue-500"></i>;
  } else if (lowerForecast.includes('cloudy')) {
    return <i className="fas fa-cloud text-gray-500"></i>;
  } else if (lowerForecast.includes('fair')) {
    return <i className="fas fa-sun text-yellow-500"></i>;
  } else if (lowerForecast.includes('windy')) {
    return <i className="fas fa-wind text-teal-500"></i>;
  } else {
    return <i className="fas fa-cloud-sun text-orange-500"></i>;
  }
}
