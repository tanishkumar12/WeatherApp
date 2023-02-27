import './Weather.css'
import { useState } from 'react';
import CityWeather from './CityWeather';
import Forecast from './Forecast';
import Loader from '../UI/Loader';

const Weather = () => {
    const [enteredText, setEnteredText] = useState("");
    const [cityData, setCityData] = useState({});
    const [showData, setShowData] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [cityTime, setCityTime] = useState('00:00:00');
    const [dataSeven, setdataSeven] = useState({});
    const [forecastData, setForecastData] = useState([]);
    const [dayData, setDayData] = useState('');


    const TextInput = (event) => {
        setEnteredText(event.target.value);
    };

    async function fetchWeather() {
        setIsLoading(true);
        const city = enteredText;
        let APIKEY = "cbe3dd267a18f6c89943b3eff94f1ed7";
        let url =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "+&appid=" +
            APIKEY +
            "&units=metric";
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        const weatherData = {
            cityName: data.name.toUpperCase(),
            cityTemp: data.main.temp,
            cityHumidity: data.main.humidity,
            cityTempFeelsLike: data.main.feels_like,
            cityWindSpeed: data.wind.speed,
            cityDescription: data.weather[0].description.toUpperCase(),
            cityCountry: data.sys.country,
        };

        let timeurl = 'https://api.ipgeolocation.io/timezone?apiKey=ce987984ff6942ecbf63c001e7141a61&location=' + city;
        const responseTime = await fetch(timeurl);
        const dataTime = await responseTime.json();

        console.log(dataTime);
        const currentTime = dataTime.time_24;
        const currentDayData = dataTime.date_time_txt;
        const currentDate = dataTime.date;
        console.log(currentTime);
        console.log(currentDayData);
        setCityTime(currentTime);
        const tempDate = new Date(currentDate);
        // tempDate.setDate(tempDate.getDate() + 1);
        const dateTempData = tempDate.toDateString().split(' ').splice(1, 3);

        console.log(dateTempData);

        setCityData(weatherData);
        setIsLoading(false);
        setEnteredText("");
        console.log(cityData);

        let sevenDayUrl = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=+' + city + '&appid=34480b98aa332da53123a0ac63a4ea9d&units=metric';
        const responseForecast = await fetch(sevenDayUrl);
        const sevenDayForecast = await responseForecast.json();
        console.log(sevenDayForecast);
        let temp = currentDayData.split(',')[0];
        console.log(temp);

        let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        for (let i = 0; i < 7; i++) {
            if (temp === days[i]) {
                const weatherDataForecast = [
                    {
                        day: days[i + 1],
                        temp: (parseInt(sevenDayForecast.list[0].temp.day) + parseInt(sevenDayForecast.list[0].temp.eve)) / 2,
                        date: tempDate.setDate(tempDate.getDate() + 1),
                        ndate: tempDate.toDateString().split(' ').splice(1, 3)
                    }
                    ,
                    {
                        day: days[i + 2],
                        temp: (parseInt(sevenDayForecast.list[1].temp.day) + parseInt(sevenDayForecast.list[1].temp.eve)) / 2,
                        date: tempDate.setDate(tempDate.getDate() + 1),
                        ndate: tempDate.toDateString().split(' ').splice(1, 3)
                    }
                    ,
                    {
                        day: days[i + 3],
                        temp: (parseInt(sevenDayForecast.list[2].temp.day) + parseInt(sevenDayForecast.list[2].temp.eve)) / 2,
                        date: tempDate.setDate(tempDate.getDate() + 1),
                        ndate: tempDate.toDateString().split(' ').splice(1, 3)
                    }
                    ,
                    {
                        day: days[i + 4],
                        temp: (parseInt(sevenDayForecast.list[3].temp.day) + parseInt(sevenDayForecast.list[3].temp.eve)) / 2,
                        date: tempDate.setDate(tempDate.getDate() + 1),
                        ndate: tempDate.toDateString().split(' ').splice(1, 3)
                    }
                    ,
                    {
                        day: days[i + 5],
                        temp: (parseInt(sevenDayForecast.list[4].temp.day) + parseInt(sevenDayForecast.list[4].temp.eve)) / 2,
                        date: tempDate.setDate(tempDate.getDate() + 1),
                        ndate: tempDate.toDateString().split(' ').splice(1, 3)

                    }
                    ,
                    {
                        day: days[i + 6],
                        temp: (parseInt(sevenDayForecast.list[5].temp.day) + parseInt(sevenDayForecast.list[5].temp.eve)) / 2,
                        date: tempDate.setDate(tempDate.getDate() + 1),
                        ndate: tempDate.toDateString().split(' ').splice(1, 3)

                    }
                    ,
                    {
                        day: days[i + 7],
                        temp: (parseInt(sevenDayForecast.list[6].temp.day) + parseInt(sevenDayForecast.list[6].temp.eve)) / 2,
                        date: tempDate.setDate(tempDate.getDate() + 1),
                        ndate: tempDate.toDateString().split(' ').splice(1, 3)
                    }

                ]

                console.log(weatherDataForecast);
                setForecastData(weatherDataForecast);
                break;

            }
        }
        setIsLoading(false);


    }

    const getWeather = (event) => {
        event.preventDefault();
        fetchWeather();
        setShowData(true);
    };


    return <div className="weather">
        <div>
            <h1 className='title'>Weather in</h1>
        </div>
        <form onSubmit={getWeather} className="form">
            <input className='input'
                type="text"
                placeholder="which city?"
                onInput={TextInput}
                value={enteredText}
            />
            {/* <button type="submit">Search</button> */}
        </form>
        <div className='weatherdata'>
            {!isLoading && showData && <CityWeather

                name={cityData.cityName}
                country={cityData.cityCountry}
                temp={cityData.cityTemp}
                humidity={cityData.cityHumidity}
                feelsLike={cityData.cityTempFeelsLike}
                description={cityData.cityDescription}
                windSpeed={cityData.cityWindSpeed}
                time={cityTime}
            />}
            {isLoading && <Loader />}
            {!isLoading && showData && <Forecast forecast={forecastData} />}

        </div>
    </div>
}

export default Weather;