import Card from "../UI/Card";
import CardAnimated from "../UI/CardAnimated";
import Widget from "../UI/Widget";
import './Forecast.css';


const Forecast = props => {
    console.log(props.forecast);

    const forecastList = props.forecast.map((forecast, key) => (
        <Widget tempForecast={forecast.temp} key={key} day={forecast.day} date={forecast.ndate.toString()} />
    ));
    return <Card >
        <div className="forecastname">
            <p>Forecast</p>
            <span>...</span>
        </div>
        <ul className='ul'>{forecastList}</ul>
    </Card>
}

export default Forecast;