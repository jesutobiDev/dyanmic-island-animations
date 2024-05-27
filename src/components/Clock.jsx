import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoSunnyOutline, IoRainyOutline, IoCloudyOutline } from "react-icons/io5";

const Clock = () => {
  const [day, setDay] = useState('');
  const [dayNumber, setDayNumber] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [weatherDescription, setWeatherDescription] = useState('');
  const [weatherPercentage, setWeatherPercentage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      setDay(days[now.getDay()]);
      setDayNumber(now.getDate());
      setHours(String(now.getHours()).padStart(2, '0'));
      setMinutes(String(now.getMinutes()).padStart(2, '0'));
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const apiKey = 'D6XVNRSCTH3TWZQ548D966ELA'; 
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?key=${apiKey}`);
        const weather = response.data.currentConditions;

        const iconMap = {
          'clear-day': <IoSunnyOutline size={15} />,
          'rain': <IoRainyOutline size={15} />,
          'partly-cloudy-day': <IoCloudyOutline size={15} />,
          'cloudy': <IoCloudyOutline size={15} />,
        };

        setWeatherIcon(iconMap[weather.icon] || <IoCloudyOutline size={15} />);
        setWeatherDescription(weather.conditions);
        setWeatherPercentage(weather.humidity); 
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('');
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
            setError('');
          }
        );
      } else {
        setError('');
      }
    };

    getLocation();
  }, []);

  return (
    <div className='absolute top-[120px] right-0 left-0 ml-auto mr-auto w-auto h-auto flex items-center flex-col justify-center text-gray-400'>
        <div className='flex gap-2 items-center'>
        <div className='font-semibold text-lg'>{day} {dayNumber}</div>
        <div>{weatherIcon}</div>
        <div> {weatherPercentage !== '' && <p className='text-base font-semibold'>{weatherPercentage}%</p>}</div>
        </div>

      <div className='font-bold text-7xl'>{hours}:{minutes}</div>
      {error && <div className='text-red-500'>{error}</div>}
      <div className='flex items-center flex-col mt-4'>
      </div>
    </div>
  );
}

export default Clock;
