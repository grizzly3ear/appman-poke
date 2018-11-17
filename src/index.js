import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const RouterApp = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<RouterApp />, document.getElementById('root'))