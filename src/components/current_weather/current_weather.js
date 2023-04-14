import { useTranslation } from 'react-i18next'
import './current_weather.css'

const CurrentWeather = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather_description">
            {t(data.weather[0].description)}
          </p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather_icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter_row">
            <span className="parameter_label">{t('Details')}</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">{t('Feels like')}:</span>
            <span className="parameter_value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">{t('Wind')}:</span>
            <span className="parameter_value">{data.wind.speed}m/s</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">{t('Humidity')}:</span>
            <span className="parameter_value">{data.main.humidity}%</span>
          </div>
          <div className="parameter_row">
            <span className="parameter_label">{t('Pressure')}:</span>
            <span className="parameter_value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
