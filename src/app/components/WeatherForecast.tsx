'use client';

import { useState, useEffect } from 'react';
import { getWeatherIcon, formatDayName } from '../utils/weatherIconHelper';
import './WeatherForecast.css';

// Interface for the structure of an individual forecast item from the API
interface ApiRawForecastItem {
  date: string;
  timestamp: string; 
  temperature: {
    low: number;
    high: number;
  };
  relative_humidity: { 
    low: number;
    high: number;
  };
  forecast: string; 
  wind: {
    speed: {
      low: number;
      high: number;
    };
    direction: string;
  };
}

// Interface for the overall API response structure from data.gov.sg
interface ApiData {
  items: Array<{
    update_timestamp: string;
    timestamp: string;
    valid_period: {
      start: string;
      end: string;
    };
    forecasts: ApiRawForecastItem[]; // Use ApiRawForecastItem here
  }>;
  api_info: {
    status: string;
  };
}


// Your internal data structures
interface ForecastDetail {
  timestamp: string;
  temperature: {
    low: number;
    high: number;
    unit: string;
  };
  relativeHumidity: {
    low: number;
    high: number;
    unit: string;
  };
  forecast: {
    summary: string;
    code: string;
    text: string;
  };
  day: string;
  wind: {
    speed: {
      low: number;
      high: number;
    };
    direction: string;
  };
}

interface WeatherRecord {
  date: string;
  updatedTimestamp: string;
  timestamp: string;
  forecasts: ForecastDetail[];
}

interface WeatherResponse {
  code: number;
  errorMsg: string | null;
  data: {
    records: WeatherRecord[];
  };
}

export default function WeatherForecast() {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      setLoading(true); 
      try {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        
        const response = await fetch(
          `https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=${formattedDate}`,
          {
            headers: {
              'Accept': 'application/json'
            }
          }
        );

        if (!response.ok) {
          console.error('API Response not OK:', {
            status: response.status,
            statusText: response.statusText
          });
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiData = await response.json(); 
        console.log('Weather API response:', data);

        if (!data || !data.items || data.items.length === 0 || !data.items[0].forecasts || data.items[0].forecasts.length === 0) {
          throw new Error('Invalid data format received from API or no forecasts found');
        }

        const apiRecord = data.items[0];

        // Explicitly type the parameter 'f' in the map function.
        // This is likely where line 93 error is pointing if 'any' is still there.
        const transformedForecasts: ForecastDetail[] = apiRecord.forecasts.map((f: ApiRawForecastItem): ForecastDetail => ({
          timestamp: f.date, 
          temperature: {
            low: f.temperature.low,
            high: f.temperature.high,
            unit: 'Degrees Celsius' 
          },
          relativeHumidity: { 
            low: f.relative_humidity.low,
            high: f.relative_humidity.high,
            unit: 'Percentage' 
          },
          forecast: {
            summary: f.forecast, 
            code: '',            
            text: f.forecast     
          },
          day: new Date(f.date).toLocaleDateString('en-US', { weekday: 'long' }), 
          wind: {
            speed: {
              low: f.wind.speed.low,
              high: f.wind.speed.high
            },
            direction: f.wind.direction
          }
        }));
        
        const transformedData: WeatherResponse = {
          code: 1, 
          errorMsg: null,
          data: {
            records: [{
              date: formattedDate, 
              updatedTimestamp: apiRecord.update_timestamp || new Date().toISOString(),
              timestamp: apiRecord.timestamp || new Date().toISOString(),
              forecasts: transformedForecasts // Use the explicitly typed and transformed array
            }]
          }
        };

        setWeatherData(transformedData);
        setError(null);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
        setWeatherData(null); 
      } finally {
        setLoading(false);
      }
    }

    fetchWeatherData();

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

  if (!weatherData?.data?.records || weatherData.data.records.length === 0 || !weatherData.data.records[0].forecasts || weatherData.data.records[0].forecasts.length === 0) {
    return (
      <div className="text-center p-4 text-gray-600">
        No weather data available.
      </div>
    );
  }

  const todayForecast = weatherData.data.records[0].forecasts[0];
  const fourDayOutlook = weatherData.data.records[0].forecasts;

  return (
    <div className="weather-section-container">
      {/* Today's Weather Card */}      <div className="today-weather-card">
        {/* Line 220 was here previously, ensure this is ' */}
        <h3>Today&apos;s Weather</h3> 
        <p className="current-condition-text">{todayForecast.forecast.summary}</p>
        <div className="current-weather-icon-temp">
          <i className={`fas ${getWeatherIcon(todayForecast.forecast.text)} weather-icon-large`}></i>
          <span className="current-temp">{todayForecast.temperature.high}°C</span>
        </div>
        
        <div className="today-details-grid">
          <div className="detail-item">
            <i className="fas fa-thermometer-half"></i>
            <div>
              <div>High/Low</div>
              <div>{todayForecast.temperature.high}°/{todayForecast.temperature.low}°C</div>
            </div>
          </div>
          <div className="detail-item">
            <i className="fas fa-tint"></i>
            <div>
              <div>Humidity</div>
              <div>{todayForecast.relativeHumidity.low}-{todayForecast.relativeHumidity.high}%</div>
            </div>
          </div>
          <div className="detail-item">
            <i className="fas fa-wind"></i>
            <div>
              <div>Wind</div>
              <div>{todayForecast.wind.direction} {todayForecast.wind.speed.low}-{todayForecast.wind.speed.high} km/h</div>
            </div>
          </div>
          <div className="detail-item">
            <i className="fas fa-clock"></i>
            <div>
              <div>Updated</div>
              <div>{new Date(weatherData.data.records[0].updatedTimestamp).toLocaleTimeString('en-SG', {
                hour: '2-digit',
                minute: '2-digit'
              })}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Day Forecast Section */}
      <div className="four-day-forecast-container">
        <h3><i className="fas fa-sun"></i> 4-Day Forecast</h3>
        <div className="forecast-cards-grid">
          {fourDayOutlook.map((day, index) => (
            <div key={index} className="forecast-day-card">
              <div className="day-name">{formatDayName(day.timestamp, index)}</div>
              <i className={`fas ${getWeatherIcon(day.forecast.text)} weather-icon-medium`}></i>
              <div className="temps">
                <span className="temp-high">{day.temperature.high}°</span>
                <span className="temp-low">{day.temperature.low}°</span>
              </div>
              {/* CHECK AROUND HERE FOR LINE 220 IF THE ERROR IS NOT IN H3 */}
              {/* For example, if you had <p>Here's the outlook</p> it needs to be <p>Here's the outlook</p> */}
              <p className="day-description">{day.forecast.summary}</p>
              <p className="day-humidity">{day.relativeHumidity.low}-{day.relativeHumidity.high}% humidity</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}