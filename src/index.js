import React from 'react'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux'
import App from './Components/App'
import thunk from 'redux-thunk'

const middleware = [thunk]
const enhancer = compose(applyMiddleware(...middleware))
const store = createStore(rootReducer, enhancer)

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'))
