import ReactDOM from 'react-dom/client'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MovieContextProvider from './Context/MovieContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </React.StrictMode>,
)
