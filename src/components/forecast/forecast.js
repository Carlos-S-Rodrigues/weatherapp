import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion'
import './forecast.css'
import { useTranslation } from 'react-i18next'

const Forecast = ({ data }) => {
  const { t } = useTranslation()
  const WEEK_DAYS = [
    t('monday'),
    t('tuesday'),
    t('wednesday'),
    t('thursday'),
    t('friday'),
    t('saturday'),
    t('sunday')
  ]

  const dayInAWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  )

  return (
    <>
      <label className="title">{t('Daily Forecast')}</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily_item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min_max">
                    {Math.round(item.main.temp_min)}°C /{' '}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily_details_grid">
                <div className="daily_details_grid_item">
                  <label>{t('Pressure')}:</label>
                  <label>{item.main.pressure} hPA</label>
                </div>
                <div className="daily_details_grid_item">
                  <label>{t('Humidity')}:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily_details_grid_item">
                  <label>{t('Clouds')}:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily_details_grid_item">
                  <label>{t('WindSpeed')}:</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily_details_grid_item">
                  <label>{t('Sea level')}:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily_details_grid_item">
                  <label>{t('Feels like')}:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast
