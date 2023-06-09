import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './redux'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
