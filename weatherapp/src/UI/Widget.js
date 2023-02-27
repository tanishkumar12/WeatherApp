import './Widget.css';
const Widget = props => {
    return <div className="widget">
        <p className='day'>{props.day}</p>
        <p className='date'>{props.date}</p>
        <p className='temprature'>{props.tempForecast} °C</p>
    </div>
}

export default Widget;