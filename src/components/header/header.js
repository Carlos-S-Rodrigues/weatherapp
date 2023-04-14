import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './header.css'

function Header() {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language, i18n])

  const handleLanguageChange = lng => {
    setLanguage(lng)
  }

  return (
    <header>
      <h1>Weather anywhere</h1>

      {/* <div>
        <button onClick={() => handleLanguageChange('en-US')}>English</button>
        <button onClick={() => handleLanguageChange('pt-BR')}>Português</button>
      </div> */}
    </header>
  )
}

export default Header
