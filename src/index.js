import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import i18n from './utils/i18n'

i18n.init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
