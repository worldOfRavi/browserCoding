import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'
// import UseContextProvider  from './hooks/UseContext.jsx'

createRoot(document.getElementById('root')).render(
  // <UseContextProvider>  //used while using useContext
  <Provider store={store}>
    <App />
  </Provider>
  // </UseContextProvider>
)
