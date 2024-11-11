import "./WeatherForecast.css"

const WeatherForecastBit = ({weatherForecast}) => {
    return (
        <div className="weather">
                <h2>{weatherForecast.day}</h2> 
                <img src={weatherForecast.img} alt={weatherForecast.imgAlt} />  {/* sets the image sources*/}
                <p><span>Conditions: </span>{weatherForecast.conditions}</p> {/* displays the weather condition*/}
                <p><span>Time: </span>{weatherForecast.time}</p>  {/* displays the time condition*/}
        </div>
    )
}

export default WeatherForecastBit;
