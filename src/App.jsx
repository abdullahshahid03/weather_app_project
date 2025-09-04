import React ,{useState} from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import WeatherCard from './components/WeatherCard';
import Header from './components/Header';

function App() {
  const [Weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (city) => {
    console.log("fetchWeather called with city:", city);
    setLoading(true);
    seterror("");
    try {
      const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
      console.log("Request URL:", url);
      const response = await axios.get(url);
      console.log("API response:", response);
      setWeather(response.data);
    } catch (err) {
      console.log("Error occurred:", err);
      if (err.response && err.response.status === 404) {
        seterror("City not found");
      } else {
        seterror("An error occurred. Please try again.");
      }
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center flex-col justify-center min-h-[80vh]">
        <div className='text-white flex flex-col items-center bg-black p-8 rounded-lg shadow-md max-w-md w-full mt-8'>
          <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
          <Searchbar fetchWeather={fetchWeather} />
          {loading && <p className="text-center mt-4">Loading...</p>}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {Weather && <WeatherCard weather={Weather} />}
        </div>
      </div>
    </div>
  );
}

export default App;