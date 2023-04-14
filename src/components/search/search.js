import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api'
import { useTranslation } from 'react-i18next'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)
  const { t, i18n } = useTranslation()

  const loadOptions = inputValue => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map(city => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.country}`
            }
          })
        }
      })
      .catch(err => console.error(err))
  }

  const handleOnChange = searchData => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      placeholder={t('search.placeholder')}
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      noOptionsMessage={() => t('search.noOptions')}
      additional={{ language: i18n.language }}
    />
  )
}

export default Search
