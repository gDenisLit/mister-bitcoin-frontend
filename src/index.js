import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/styles.scss'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fal } from '@fortawesome/pro-light-svg-icons'

const root = ReactDOM.createRoot(document.getElementById('root'))
library.add(fal)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
