import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
      <Toaster />
    </HashRouter>
  </Provider>
)
