import "./WeatherForecast.css"

const WeatherForecastBit = ({weatherForecast}) => {
    return (
        <div className="weather">
                <h2>{weatherForecast.day}</h2>
                <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />
                <p><span>Conditions: </span>{weatherForecast.conditions}</p>
                <p><span>Time: </span>{weatherForecast.time}</p>
        </div>
    )
}

export default WeatherForecastBit;
