import { useState, useEffect } from "react";
import Card from "../UI/Card";
import Image from "../UI/Image";
import './CityWeather.css';

const CityWeather = props => {
    const [night, setNight] = useState(true);
    let ctime = props.time.split(':')[0];
    let timeInt = parseInt(ctime);
    console.log(ctime);
    console.log(typeof (timeInt));
    useEffect(() => {
        if (timeInt > 6 && timeInt < 18) {
            setNight(false);
        }
        else {
            setNight(true);
        }
    }, [timeInt]);

    return <Card >
        <Image curNight={night} />
        {!night && <div className="cityname">
            <p>{props.name}</p>
            <span>...</span>
        </div>}
        {night && <div className="citynamenight">
            <p>{props.name}</p>
            <span>...</span>
        </div>}
        <p>Country : {props.country}</p>
        <div className="temp">
            <div className="information">
                <p>{props.temp}° C</p>
                <span>Temp</span>
            </div>
            <div className="information">
                <p>{props.feelsLike}° C</p>
                <span>Feels like</span>
            </div>
        </div>
        <div className="data">
            <div className="information">
                <p>{props.description}</p>
                <span>Description</span>
            </div>
            <div className="information">
                <p>{props.humidity}%</p>
                <span>Humidity</span>
            </div>

        </div>
        <p>WindSpeed : {props.windSpeed} Miles/hr</p>
        <p>CurrentTime : {props.time}</p>
    </Card >
}

export default CityWeather;